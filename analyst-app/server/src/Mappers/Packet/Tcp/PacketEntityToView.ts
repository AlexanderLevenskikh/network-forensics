import { ITcpPacketView } from '../../../DAL/Packet/Tcp/ITcpPacketView';
import { IPacketEntity } from '../../../Entities/Packet/IPacketEntity';
import { mapPacketEntityIpLayerToView } from './PacketEntityIpLayerToView';

export function mapPacketEntityToTcpPacketView(entity: IPacketEntity): ITcpPacketView {
    const { layers: { eth, frame, ip, tcp } } = entity;

    return {
        ip: mapPacketEntityIpLayerToView(ip),
        tcp:
    };
}
