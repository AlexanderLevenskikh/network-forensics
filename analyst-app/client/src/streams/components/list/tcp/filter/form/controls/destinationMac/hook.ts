import { TcpStreamsSearchParamsModel } from 'root/streams/model/list/tcpStreamsSearchParams';
import { StreamsSearchActions } from 'root/streams/actions/search';
import { useLocalState } from 'root/shared/hooks/useLocalState';
import { StreamRouterSelectors } from 'root/streams/selectors/router';

export function useTcpStreamsFilterFormDestinationMac() {
    const selectQuery = (searchParams: TcpStreamsSearchParamsModel) => searchParams.destinationMac;

    const createChangingAction = (model: TcpStreamsSearchParamsModel) =>
        StreamsSearchActions.changeSearchParams({ model });
    const [
        destinationMac,
        onChange,
        onBlur,
    ] = useLocalState(
        StreamRouterSelectors.tcpStreamsSearchParamsDraft,
        selectQuery,
        createChangingAction,
        'destinationMac',
    );

    return {
        destinationMac,
        onChange,
        onBlur,
    }
}
