export type ResultFilterType = {
  schema: {
    attributes: {
      origin: {
        enum: any;
      };
    };
  };
};

export type FilterType = {
  result: ResultFilterType | null;
  loading: boolean;
  error: string;
};
