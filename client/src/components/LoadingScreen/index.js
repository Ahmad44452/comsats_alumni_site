import * as StyledLoading from '../../Styles/Loading.styled';
import { useSelector } from 'react-redux';

const LoadingScreen = () => {

  const isLoading = useSelector(state => state.utilitesSlice.isLoading);

  return (
    (
      isLoading && (
        <StyledLoading.StyledLoadingScreen>
          <StyledLoading.StyledLoadingScreenLoader />
        </StyledLoading.StyledLoadingScreen>
      )
    )

  )
}

export default LoadingScreen;