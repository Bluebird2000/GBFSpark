import { GBFS_FEEDS } from '@constants/constant';
import { Station, StationInfo, StationStatus } from '@helpers/interface';

export async function fetchGBFSData(gbfsFeedUrl: string): Promise<Station[]> {
  try {
    const response = await fetch(gbfsFeedUrl);
    const data = await response.json();
    const feeds = data.data.en.feeds;

    const stationStatusFeed = feeds.find(
      (feed: any) => feed.name === 'station_status',
    )?.url;
    const stationInfoFeed = feeds.find(
      (feed: any) => feed.name === 'station_information',
    )?.url;

    if (!stationStatusFeed || !stationInfoFeed) {
      throw new Error('Missing station feeds in GBFS source');
    }

    const [statusRes, infoRes] = await Promise.all([
      fetch(stationStatusFeed),
      fetch(stationInfoFeed),
    ]);

    const stationStatusData: { data: { stations: StationStatus[] } } =
      await statusRes.json();
    const stationInfoData: { data: { stations: StationInfo[] } } =
      await infoRes.json();

    return stationStatusData.data.stations.map(status => {
      const info = stationInfoData.data.stations.find(
        i => i.station_id === status.station_id,
      );
      return {
        ...status,
        name: info?.name || 'Unknown',
      };
    });
  } catch (err) {
    console.error('Failed to fetch GBFS data:', err);
    return [];
  }
}

export async function fetchMultipleGBFS(): Promise<Station[]> {
  const allStations = await Promise.all(GBFS_FEEDS.map(fetchGBFSData));
  return allStations.flat();
}
