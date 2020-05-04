export type Theme = {
    name: string,
    props: {
        primaryText: string,
        secondaryText: string,
        mentions: string,
        inlineMarkdownText: string,
        multilineMarkdownText: string,
        links: string,
        icons: string,
        threadBackground: string,
        threadContainerBackground: string,
        chatTitleBackground: string,
        hoverBackground: string,
        mentionNotificationBackground: string,
        inlineMarkdownBackground: string,
        buttonBackground: string,
        iconHoverBackground: string,
        threadBorderColor: string,
        multiLineMarkdownBorderColor: string,
        inlineMarkdownBorder: string,
        borders: string,
        shadows: string,
        searchBarActiveBackground: string
        font: string
    },
    sideBarBackground?: string,
    unreadChannelColor?: string,
    channelColor?: string,
    isCustom?: boolean
}