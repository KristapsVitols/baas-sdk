type AppCredentials = {
    appUrl: string;
    appKey: string;
}

export class BaaSClient {
    private readonly appUrl: string;
    private readonly appKey: string;

    constructor(credentials: AppCredentials) {
        this.appUrl = credentials.appUrl;
        this.appKey = credentials.appKey;
    }

    public static initializeApp(credentials: AppCredentials) {
        return new this(credentials);
    }

    public async getData(path: string) {
        const res = await this.getRequest(path);

        return res.json();
    }

    private getRequest(path: string) {
        return fetch(`${this.appUrl}${path}`);
    }
}