import { LetsRockFutureLoader } from '@fiap/react-library';
import { type FC } from 'react';
import { useRouterLoadingHandler } from '@/hooks/use-router-progress-handler';
import * as S from './styles';

export const Loader: FC = () => {
  const progress = useRouterLoadingHandler();

  return (
    <S.Loader>
      <LetsRockFutureLoader progress={progress} />
    </S.Loader>
  );
};
