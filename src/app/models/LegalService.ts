export class LegalService {
    serviceName: string;
    serviceDescription: string;

    constructor(
        serviceName: string,
        serviceDescription: string
    ) {
        this.serviceName = serviceName;
        this.serviceDescription = serviceDescription
    }
}