import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { container } from "tsyringe";
import { CityInfo, Clouds, Temperature, Wind } from "../models";
import { SearchActionCreator } from "../store/actions/SearchActionCreator";
import { ApplicationReduxState } from "../store/reducers";
import { SearchSelector } from "../store/selectors";
import { SearchAction } from "../store/types";

interface IDispatchProps {
  search: (payload: string) => SearchAction;
}

interface IStateProps {
  isSearching?: boolean;
  cityInfo: CityInfo | undefined | null;
  clouds?: Clouds;
  wind?: Wind;
  temp?: Temperature;
}

interface ILocalStateProps {
  showingTempInCelsius: boolean;
  setShowTempInCelsius: (inCelsius: boolean) => void;
  needAJacket: boolean;
}

type Props = IDispatchProps & IStateProps & ILocalStateProps;

export const useSearchReduxProps = (): Props => {
  const searchActionCreator = container.resolve(SearchActionCreator);
  const searchSelector = container.resolve(SearchSelector);
  const [isInCelsius, setIsInCelsius] = React.useState(true);
  const [needAJacket, setNeedAJacket] = React.useState(false);
  const setShowTempInCelsius = React.useCallback((inCelsius: boolean) => {
    setIsInCelsius(inCelsius);
  }, []);
  const dispatch = useDispatch();
  const tempInFaren = useSelector((state: ApplicationReduxState) =>
    searchSelector.selectTemperature(state, false)
  );
  const stateProps: IStateProps = {
    isSearching: useSelector(searchSelector.selectIsSearching),
    cityInfo: useSelector(searchSelector.selectCityInfo),
    clouds: useSelector(searchSelector.selectClouds),
    wind: useSelector(searchSelector.selectWind),
    temp: useSelector((state: ApplicationReduxState) =>
      searchSelector.selectTemperature(state, isInCelsius)
    ),
  };

  useEffect(() => {
    setNeedAJacket((tempInFaren ?? 61) < 60);
  }, [tempInFaren]);

  return {
    setShowTempInCelsius,
    showingTempInCelsius: isInCelsius,
    search: (payload) => dispatch(searchActionCreator.search(payload)),
    needAJacket,
    ...stateProps,
  };
};
