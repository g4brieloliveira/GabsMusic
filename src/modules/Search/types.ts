export type TrackProps = {
  item: {
    album: {
      images: ImageProps[];
    };
    artists: ArtistProps[];
    id: string;
    imageUri: string;
    is_playable: any;
    preview_url: any;
    name: string;
  };
};

export type ArtistProps = {
  name: string;
};

export type ImageProps = {
  url: string;
  height: number;
  width: number;
};
