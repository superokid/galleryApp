import { AxiosResponse } from 'axios';
import axios from './axiosConfig';

export const getArtWorks = async ({ search, page = 1 }: getArtWorksParams) => {
  if (search) {
    return axios.get('/v1/artworks/search', {
      params: {
        q: search,
        page,
        limit: 5,
        fields: 'id,image_id',
      },
    });
  }
  return axios.get('/v1/artworks', {
    params: {
      page,
      limit: 5,
      fields: 'id,image_id',
    },
  });
};

interface getArtWorksParams {
  search?: string;
  page?: number;
}

export type ArtWorksApi = AxiosResponse<ArtWorks>;

export interface ArtWorks {
  data: ArtWork[];
  config?: {
    iiif_url: string;
  };
}

export interface ArtWork {
  id: number;
  api_model: string;
  api_link: string;
  is_boosted: boolean;
  title: string;
  alt_titles: null | string;
  thumbnail: {
    lqip: string;
    width: number;
    height: number;
    alt_text: string;
  };
  image_id: string;
}
