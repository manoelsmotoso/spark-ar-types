declare interface LiveStreamingModule {
    comments: LiveStreamingComments
    concurrentViewerCount: ScalarSignal
    reactions: LiveStreamingReactions
    state: State
}