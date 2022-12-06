import fetch from "node-fetch";

export const getTopTrackFromStatsfm = async () => {
  const apiUrl = new URL(`/api/v1/users/${process.env.STATSFM_ID}/top/tracks`, 'https://api.stats.fm');
  apiUrl.searchParams.set('range', 'weeks');
  const result = await fetch(apiUrl.toString(), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: process.env.STATSFM_TOKEN ?? ''
    }
  });
  const data = await result.json();
  if (!data) return undefined
  return (data as TopTracksResnponse.RootObject).items[0]
}

declare module TopTracksResnponse {

  export interface Album {
      id: number;
      image: string;
      name: string;
  }

  export interface Artist {
      id: number;
      name: string;
  }

  export interface ExternalIds {
      spotify: string[];
  }

  export interface Track {
      albums: Album[];
      artists: Artist[];
      durationMs: number;
      explicit: boolean;
      externalIds: ExternalIds;
      id: number;
      name: string;
      spotifyPopularity: number;
  }

  export interface Item {
      position: number;
      streams?: any;
      indicator: string;
      track: Track;
  }

  export interface RootObject {
      items: Item[];
  }

}
