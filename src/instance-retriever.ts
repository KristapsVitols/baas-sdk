export class InstanceRetriever {
    public static getInstance(instanceId: string) {
        return this.makeRequest(instanceId);
    }

    public static async makeRequest(instanceId: string) {
        const res = await fetch('http://localhost:8080/api/validate-instance', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({instanceId}),
        });

        return await res.json();
    }
}