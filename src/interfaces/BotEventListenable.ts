import {
  Channel,
  Guild,
  User,
  GuildMember,
  Message,
  Collection,
  Snowflake,
  MessageReaction,
  Role,
  TextChannel,
  VoiceState,
  DMChannel,
  GuildChannel,
  GuildEmoji,
  Invite,
  Presence,
  Speaking,
} from 'discord.js'

/**
 * GuildMembersChunk type.
 */
export type GuildMembersChunk = {
  index: number
  count: number
  nonce?: string
}

/**
 * RateLimitInfo type.
 */
export type RateLimitInfo = {
  timeout: number
  limit: number
  method: string
  path: string
  route: string
}

/*
 * BotEventListenableInterface.
 */
export interface BotEventListenableInterface {
  /*
   * emitted whenever a channel is created.
   */
  onChannelCreate(handler: (channel: DMChannel | GuildChannel) => void): void

  /*
   * emitted whenever a channel is deleted.
   */
  onChannelDelete(handler: (channel: DMChannel | GuildChannel) => void): void

  /*
   * emitted whenever the pins of a channel are updated. due to the nature of the websocket event, not much information can be provided easily here - you need to manually check the pins yourself.
   */
  onChannelPinsUpdate(
    handler: (channel: DMChannel | TextChannel, time: Date) => void
  ): void

  /*
   * emitted whenever a channel is updated - e.g. name change, topic change, channel type change.
   */
  onChannelUpdate(
    handler: (
      oldChannel: DMChannel | GuildChannel,
      newChannel: DMChannel | GuildChannel
    ) => void
  ): void

  /*
   * emitted for general debugging information.
   */
  onDebug(handler: (info: string) => void): void

  /*
   * emitted whenever a custom emoji is created in a guild.
   */
  onEmojiCreate(handler: (emoji: GuildEmoji) => void): void

  /*
   * emitted whenever a custom emoji is deleted in a guild.
   */
  onEmojiDelete(handler: (emoji: GuildEmoji) => void): void

  /*
   * emitted whenever a custom emoji is updated in a guild.
   */
  onEmojiUpdate(
    handler: (oldEmoji: GuildEmoji, newEmoji: GuildEmoji) => void
  ): void

  /*
   * emitted when the client encounters an error.
   */
  onError(handler: (error: Error) => void): void

  /*
   * emitted whenever a member is banned from a guild.
   */
  onGuildBanAdd(handler: (guild: Guild, user: User) => void): void

  /*
   * emitted whenever a member is unbanned from a guild.
   */
  onGuildBanRemove(handler: (guild: Guild, user: User) => void): void

  /*
   * emitted whenever the client joins a guild.
   */
  onGuildCreate(handler: (guild: Guild) => void): void

  /*
   * emitted whenever a guild kicks the client or the guild is deleted/left.
   */
  onGuildDelete(handler: (guild: Guild) => void): void

  /*
   * emitted whenever a guild integration is updated
   */
  onGuildIntegrationsUpdate(handler: (guild: Guild) => void): void

  /*
   * emitted whenever a user joins a guild.
   */
  onGuildMemberAdd(handler: (member: GuildMember) => void): void

  /*
   * emitted whenever a member leaves a guild, or is kicked.
   */
  onGuildMemberRemove(handler: (member: GuildMember) => void): void

  /*
   * emitted whenever a chunk of guild members is received (all members come from the same guild).
   */
  onGuildMembersChunk(
    handler: (
      members: Collection<Snowflake, GuildMember>,
      guild: Guild,
      chunk: GuildMembersChunk
    ) => void
  ): void

  /*
   * emitted once a guild member changes speaking state.
   */
  onGuildMemberSpeaking(
    handler: (member: GuildMember, speaking: Speaking) => void
  ): void

  /*
   * emitted whenever a guild member changes - i.e. new role, removed role, nickname. also emitted when the user's details (e.g. username) change.
   */
  onGuildMemberUpdate(
    handler: (oldMember: GuildMember, newMember: GuildMember) => void
  ): void

  /*
   * emitted whenever a guild becomes unavailable, likely due to a server outage.
   */
  onGuildUnavailable(handler: (guild: Guild) => void): void

  /*
   * emitted whenever a guild is updated - e.g. name change.
   */
  onGuildUpdate(handler: (oldGuild: Guild, newGuild: Guild) => void): void

  /*
   * emitted when the client's session becomes invalidated. you are expected to handle closing the process gracefully and preventing a boot loop if you are listening to this event.
   */
  onInvalidated(handler: () => void): void

  /*
   * emitted when an invite is created.

this event only triggers if the client has manage_guild permissions for the guild, or manage_channel permissions for the channel.
   */
  onInviteCreate(handler: (invite: Invite) => void): void

  /*
   * emitted when an invite is deleted.

this event only triggers if the client has manage_guild permissions for the guild, or manage_channel permissions for the channel.
   */
  onInviteDelete(handler: (invite: Invite) => void): void

  /*
   * emitted whenever a message is created.
   */
  onMessage(handler: (message: Message) => void): void

  /*
   * emitted whenever a message is deleted.
   */
  onMessageDelete(handler: (message: Message) => void): void

  /*
   * emitted whenever messages are deleted in bulk.
   */
  onMessageDeleteBulk(
    handler: (messages: Collection<Snowflake, Message>) => void
  ): void

  /*
   * emitted whenever a reaction is added to a cached message.
   */
  onMessageReactionAdd(
    handler: (messageReaction: MessageReaction, user: User) => void
  ): void

  /*
   * emitted whenever a reaction is removed from a cached message.
   */
  onMessageReactionRemove(
    handler: (messageReaction: MessageReaction, user: User) => void
  ): void

  /*
   * emitted whenever all reactions are removed from a cached message.
   */
  onMessageReactionRemoveAll(handler: (message: Message) => void): void

  /*
   * emitted when a bot removes an emoji reaction from a cached message.
   */
  onMessageReactionRemoveEmoji(
    handler: (reaction: MessageReaction) => void
  ): void

  /*
   * emitted whenever a message is updated - e.g. embed or content change.
   */
  onMessageUpdate(
    handler: (oldMessage: Message, newMessage: Message) => void
  ): void

  /*
   * emitted whenever a guild member's presence (e.g. status, activity) is changed.
   */
  onPresenceUpdate(
    handler: (oldPresence: Presence, newPresence: Presence) => void
  ): void

  /*
   * emitted when the client hits a rate limit while making a request
   */
  onRateLimit(handler: (rateLimitInfo: RateLimitInfo) => void): void

  /*
   * emitted when the client becomes ready to start working.
   */
  onReady(handler: () => void): void

  /*
   * emitted whenever a role is created.
   */
  onRoleCreate(handler: (role: Role) => void): void

  /*
   * emitted whenever a guild role is deleted.
   */
  onRoleDelete(handler: (role: Role) => void): void

  /*
   * emitted whenever a guild role is updated.
   */
  onRoleUpdate(handler: (oldRole: Role, newRole: Role) => void): void

  /*
   * emitted when a shard's websocket disconnects and will no longer reconnect.
   */
  onShardDisconnect(handler: (event: CloseEvent, id: number) => void): void

  /*
   * emitted whenever a shard's websocket encounters a connection error.
   */
  onShardError(handler: (error: Error, shardID: number) => void): void

  /*
   * emitted when a shard turns ready.
   */
  onShardReady(
    handler: (id: number, unavailableGuilds?: Set<string>) => void
  ): void

  /*
   * emitted when a shard is attempting to reconnect or re-identify.
   */
  onShardReconnecting(handler: (id: number) => void): void

  /*
   * emitted when a shard resumes successfully.
   */
  onShardResume(handler: (id: number, replayedEvents: number) => void): void

  /*
   * emitted whenever a user starts typing in a channel.
   */
  onTypingStart(handler: (channel: Channel, user: User) => void): void

  /*
   * emitted whenever a user's details (e.g. username) are changed. triggered by the discord gateway events user_update, guild_member_update, and presence_update.
   */
  onUserUpdate(handler: (oldUser: User, newUser: User) => void): void

  /*
   * emitted whenever a member changes voice state - e.g. joins/leaves a channel, mutes/unmutes.
   */
  onVoiceStateUpdate(
    handler: (oldState: VoiceState, newState: VoiceState) => void
  ): void

  /*
   * emitted for general warnings.
   */
  onWarn(handler: (info: string) => void): void

  /*
   * emitted whenever a guild text channel has its webhooks changed.
   */
  onWebhookUpdate(handler: (channel: TextChannel) => void): void
}
