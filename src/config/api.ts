import { AxiosResponse } from 'axios';
import axios from './axiosConfig';
import { PAGE_LIMIT } from './constants';

export const getArtWorks = async ({ search, page = 1 }: getArtWorksParams) => {
  if (search) {
    return axios.get('/v1/artworks/search', {
      params: {
        q: search,
        page,
        limit: PAGE_LIMIT,
        fields: 'id,image_id',
      },
    });
  }
  return axios.get('/v1/artworks', {
    params: {
      page,
      limit: PAGE_LIMIT,
      fields: 'id,image_id',
    },
  });
};

export const getArtDetail = async (id: number) => {
  return axios.get(`/v1/artworks/${id}`);
};

interface getArtWorksParams {
  search?: string;
  page?: number;
}

export type ArtWorksApi = AxiosResponse<ArtWorks>;
export type ArtDetailApi = AxiosResponse<{
  data: ArtWork;
  config?: {
    iiif_url: string;
  };
}>;

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
  inscriptions: string;
  provenance_text: string;
  publication_history: string;
  exhibition_history: string;
  credit_line: string;
}
