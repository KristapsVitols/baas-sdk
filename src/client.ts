import {InstanceRetriever} from './instance-retriever';

export class BaaSClient {
    private instance: any;

    constructor(instanceId: string) {
        this.initialize(instanceId);
    }

    public static createClient(instanceId: string) {
        return new this(instanceId);
    }

    public initialize(instanceId: string) {
        this.instance = InstanceRetriever.getInstance(instanceId);
    }

    public async getData(path: string) {
        const res = await this.getRequest(path);

        return res.json();
    }

    private getRequest(path: string) {
        return fetch(`${this.instance.url}/${path}`);
    }
}