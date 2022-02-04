import { useQuery, gql } from '@apollo/client';

export default () => {
  const user = localStorage.getItem('user') || '';
  const userEmail = JSON.parse(user).email;

  const USER = gql`
    query User($email: String!) {
      User(email: $email) {
        zipData {
          stcountyfp
        }
      }
    }
  `;

  const { data, loading: loadingUser } = useQuery(USER, {
    variables: { email: userEmail },
  });

  const fetchWeather = async () => {
    const FIPS = data?.User.zipData.stcountyfp;
    if (!FIPS) return;

    const paramsObj = {
      datasetid: ['GSOM'],
      startdate: ['2021-01-01'],
      enddate: ['2022-01-01'],
      datatypeid: ['TMIN', 'EMNT', 'TAVG', 'EMXT', 'TMAX'],
      locationid: [`FIPS:${FIPS}`],
      limit: ['1000'],
      units: ['standard'],
    };

    const params = Object.keys(paramsObj).reduce((previous: string[], current: string) => {
      const value: string[] = paramsObj[current as keyof typeof paramsObj];
      return [...previous, ...value.map((item: string) => `${current}=${item}`)];
    }, []);

    const response = await fetch(`https://www.ncdc.noaa.gov/cdo-web/api/v2/data?${params.join('&')}`, {
      headers: new Headers({
        Token: 'kLWqzArygBVySsSGaRtxJFQOEsPNMMQm',
      }),
    });
    const weather = await response.json();
    return weather;
  };

  return {
    loadingUser,
    fetchWeather,
  };
};
