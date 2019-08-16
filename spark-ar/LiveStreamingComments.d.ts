declare interface LiveStreamingComments {
    stream: EventSource
    startHashtagCounter(): EventSource
    startHashtagVote(): EventSource
    startMatchCounter(matchStrings, isCaseSensitive): EventSource
    startMatchVote(matchStrings, isCaseSensitive): EventSource
}