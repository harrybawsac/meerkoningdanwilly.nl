import type { FC } from 'react';

const Track: FC<any> = ({ track }) => {
  return <p>{track.name}</p>;
};

export default Track;
