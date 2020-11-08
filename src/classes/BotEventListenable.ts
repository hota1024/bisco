import {
  GuildMembersChunk,
  IBotEventListenableInterface,
  RateLimitInfo,
} from '@/interfaces'
import {
  TextChannel,
  GuildEmoji,
  Guild,
  User,
  GuildMember,
  Collection,
  Speaking,
  Invite,
  Message,
  MessageReaction,
  Presence,
  Role,
  Channel,
  VoiceState,
  CloseEvent,
  Client,
  PartialDMChannel,
  PartialGuildMember,
  Snowflake,
  PartialMessage,
  PartialUser,
} from 'discord.js'

/**
 * BotEventListenable class.
 */
export class BotEventListenable implements IBotEventListenableInterface {
  private readonly client: Client

  constructor(client: Client) {
    this.client = client
  }

  onChannelCreate(handler: (channel: Channel) => void): void {
    this.client.on('channelCreate', handler)
  }

  onChannelDelete(handler: (channel: Channel) => void): void {
    this.client.on('channelDelete', handler)
  }

  onChannelPinsUpdate(
    handler: (channel: Channel | PartialDMChannel, time: Date) => void
  ): void {
    this.client.on('channelPinsUpdate', handler)
  }

  onChannelUpdate(
    handler: (oldChannel: Channel, newChannel: Channel) => void
  ): void {
    this.client.on('channelUpdate', handler)
  }

  onDebug(handler: (info: string) => void): void {
    this.client.on('debug', handler)
  }

  onEmojiCreate(handler: (emoji: GuildEmoji) => void): void {
    this.client.on('emojiCreate', handler)
  }

  onEmojiDelete(handler: (emoji: GuildEmoji) => void): void {
    this.client.on('emojiDelete', handler)
  }

  onEmojiUpdate(
    handler: (oldEmoji: GuildEmoji, newEmoji: GuildEmoji) => void
  ): void {
    this.client.on('emojiUpdate', handler)
  }

  onError(handler: (error: Error) => void): void {
    this.client.on('error', handler)
  }

  onGuildBanAdd(handler: (guild: Guild, user: User) => void): void {
    this.client.on('guildBanAdd', handler)
  }

  onGuildBanRemove(handler: (guild: Guild, user: User) => void): void {
    this.client.on('guildBanRemove', handler)
  }

  onGuildCreate(handler: (guild: Guild) => void): void {
    this.client.on('guildCreate', handler)
  }

  onGuildDelete(handler: (guild: Guild) => void): void {
    this.client.on('guildDelete', handler)
  }

  onGuildIntegrationsUpdate(handler: (guild: Guild) => void): void {
    this.client.on('guildIntegrationsUpdate', handler)
  }

  onGuildMemberAdd(handler: (member: GuildMember) => void): void {
    this.client.on('guildMemberAdd', handler)
  }

  onGuildMemberRemove(
    handler: (member: GuildMember | PartialGuildMember) => void
  ): void {
    this.client.on('guildMemberRemove', handler)
  }

  onGuildMembersChunk(
    handler: (
      members: Collection<Snowflake, GuildMember>,
      guild: Guild,
      chunk: GuildMembersChunk
    ) => void
  ): void {
    this.client.on('guildMembersChunk', handler)
  }

  onGuildMemberSpeaking(
    handler: (
      member: GuildMember | PartialGuildMember,
      speaking: Readonly<Speaking>
    ) => void
  ): void {
    this.client.on('guildMemberSpeaking', handler)
  }

  onGuildMemberUpdate(
    handler: (
      oldMember: GuildMember | PartialGuildMember,
      newMember: GuildMember
    ) => void
  ): void {
    this.client.on('guildMemberUpdate', handler)
  }

  onGuildUnavailable(handler: (guild: Guild) => void): void {
    this.client.on('guildUnavailable', handler)
  }

  onGuildUpdate(handler: (oldGuild: Guild, newGuild: Guild) => void): void {
    this.client.on('guildUpdate', handler)
  }

  onInvalidated(handler: () => void): void {
    this.client.on('invalidated', handler)
  }

  onInviteCreate(handler: (invite: Invite) => void): void {
    this.client.on('inviteCreate', handler)
  }

  onInviteDelete(handler: (invite: Invite) => void): void {
    this.client.on('inviteDelete', handler)
  }

  onMessage(handler: (message: Message) => void): void {
    this.client.on('message', handler)
  }

  onMessageDelete(handler: (message: Message | PartialMessage) => void): void {
    this.client.on('messageDelete', handler)
  }

  onMessageDeleteBulk(
    handler: (messages: Collection<string, Message | PartialMessage>) => void
  ): void {
    this.client.on('messageDeleteBulk', handler)
  }

  onMessageReactionAdd(
    handler: (
      messageReaction: MessageReaction,
      user: User | PartialUser
    ) => void
  ): void {
    this.client.on('messageReactionAdd', handler)
  }

  onMessageReactionRemove(
    handler: (
      messageReaction: MessageReaction,
      user: User | PartialUser
    ) => void
  ): void {
    this.client.on('messageReactionRemove', handler)
  }

  onMessageReactionRemoveAll(
    handler: (message: Message | PartialMessage) => void
  ): void {
    this.client.on('messageReactionRemoveAll', handler)
  }

  onMessageReactionRemoveEmoji(
    handler: (reaction: MessageReaction) => void
  ): void {
    this.client.on('messageReactionRemoveEmoji', handler)
  }

  onMessageUpdate(
    handler: (
      oldMessage: Message | PartialMessage,
      newMessage: Message | PartialMessage
    ) => void
  ): void {
    this.client.on('messageUpdate', handler)
  }

  onPresenceUpdate(
    handler: (oldPresence: Presence | undefined, newPresence: Presence) => void
  ): void {
    this.client.on('presenceUpdate', handler)
  }

  onRateLimit(handler: (rateLimitInfo: RateLimitInfo) => void): void {
    this.client.on('rateLimit', handler)
  }

  onReady(handler: () => void): void {
    this.client.on('ready', handler)
  }

  onRoleCreate(handler: (role: Role) => void): void {
    this.client.on('roleCreate', handler)
  }

  onRoleDelete(handler: (role: Role) => void): void {
    this.client.on('roleDelete', handler)
  }

  onRoleUpdate(handler: (oldRole: Role, newRole: Role) => void): void {
    this.client.on('roleUpdate', handler)
  }

  onShardDisconnect(handler: (event: CloseEvent, id: number) => void): void {
    this.client.on('shardDisconnect', handler)
  }

  onShardError(handler: (error: Error, shardID: number) => void): void {
    this.client.on('shardError', handler)
  }

  onShardReady(
    handler: (id: number, unavailableGuilds?: Set<string>) => void
  ): void {
    this.client.on('shardReady', handler)
  }

  onShardReconnecting(handler: (id: number) => void): void {
    this.client.on('shardReconnecting', handler)
  }

  onShardResume(handler: (id: number, replayedEvents: number) => void): void {
    this.client.on('shardResume', handler)
  }

  onTypingStart(
    handler: (
      channel: Channel | PartialDMChannel,
      user: User | PartialUser
    ) => void
  ): void {
    this.client.on('typingStart', handler)
  }

  onUserUpdate(
    handler: (oldUser: User | PartialUser, newUser: User | PartialUser) => void
  ): void {
    this.client.on('userUpdate', handler)
  }

  onVoiceStateUpdate(
    handler: (oldState: VoiceState, newState: VoiceState) => void
  ): void {
    this.client.on('voiceStateUpdate', handler)
  }

  onWarn(handler: (info: string) => void): void {
    this.client.on('warn', handler)
  }

  onWebhookUpdate(handler: (channel: TextChannel) => void): void {
    this.client.on('webhookUpdate', handler)
  }
}
