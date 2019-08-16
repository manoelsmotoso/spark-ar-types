declare interface StorageScope {
    get(key: String): Promise<Object>
    remove(key: String): Promise<any>
    set(key: String, value: Object): Promise<any>
}