declare interface NetworkingModule {
    fetch(url: String): Promise<Response>
}