import * as $protobuf from "protobufjs";

export namespace POGOProtos {

    namespace Data {

        interface IARPlusEncounterValues {
            proximity?: (number|null);
            awareness?: (number|null);
            pokemon_frightened?: (boolean|null);
        }

        class ARPlusEncounterValues implements IARPlusEncounterValues {
            constructor(properties?: POGOProtos.Data.IARPlusEncounterValues);
            public proximity: number;
            public awareness: number;
            public pokemon_frightened: boolean;
            public static create(properties?: POGOProtos.Data.IARPlusEncounterValues): POGOProtos.Data.ARPlusEncounterValues;
            public static encode(message: POGOProtos.Data.IARPlusEncounterValues, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: POGOProtos.Data.IARPlusEncounterValues, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.ARPlusEncounterValues;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.ARPlusEncounterValues;
            public static fromObject(object: { [k: string]: any }): POGOProtos.Data.ARPlusEncounterValues;
            public static toObject(message: POGOProtos.Data.ARPlusEncounterValues, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IAssetDigestEntry {
            asset_id?: (string|null);
            bundle_name?: (string|null);
            version?: (number|Long|null);
            checksum?: (number|null);
            size?: (number|null);
            key?: (Uint8Array|null);
        }

        class AssetDigestEntry implements IAssetDigestEntry {
            constructor(properties?: POGOProtos.Data.IAssetDigestEntry);
            public asset_id: string;
            public bundle_name: string;
            public version: (number|Long);
            public checksum: number;
            public size: number;
            public key: Uint8Array;
            public static create(properties?: POGOProtos.Data.IAssetDigestEntry): POGOProtos.Data.AssetDigestEntry;
            public static encode(message: POGOProtos.Data.IAssetDigestEntry, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: POGOProtos.Data.IAssetDigestEntry, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.AssetDigestEntry;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.AssetDigestEntry;
            public static fromObject(object: { [k: string]: any }): POGOProtos.Data.AssetDigestEntry;
            public static toObject(message: POGOProtos.Data.AssetDigestEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        namespace Avatar {

            interface IAvatarCustomization {
                avatar_template_id?: (string|null);
                labels?: (POGOProtos.Data.Avatar.AvatarCustomization.Label[]|null);
            }

            class AvatarCustomization implements IAvatarCustomization {
                constructor(properties?: POGOProtos.Data.Avatar.IAvatarCustomization);
                public avatar_template_id: string;
                public labels: POGOProtos.Data.Avatar.AvatarCustomization.Label[];
                public static create(properties?: POGOProtos.Data.Avatar.IAvatarCustomization): POGOProtos.Data.Avatar.AvatarCustomization;
                public static encode(message: POGOProtos.Data.Avatar.IAvatarCustomization, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Data.Avatar.IAvatarCustomization, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Avatar.AvatarCustomization;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Avatar.AvatarCustomization;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Avatar.AvatarCustomization;
                public static toObject(message: POGOProtos.Data.Avatar.AvatarCustomization, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace AvatarCustomization {

                enum Label {
                    UNSET_LABEL = 0,
                    DEFAULT = 1,
                    OWNED = 2,
                    FEATURED = 3,
                    NEW = 4,
                    SALE = 5,
                    PURCHASABLE = 6,
                    UNLOCKABLE = 7,
                    VIEWED = 8,
                    LOCKED_PURCHASABLE = 9
                }
            }

            interface IAvatarItem {
                avatar_template_id?: (string|null);
                new_timestamp_ms?: (number|Long|null);
                viewed?: (boolean|null);
            }

            class AvatarItem implements IAvatarItem {
                constructor(properties?: POGOProtos.Data.Avatar.IAvatarItem);
                public avatar_template_id: string;
                public new_timestamp_ms: (number|Long);
                public viewed: boolean;
                public static create(properties?: POGOProtos.Data.Avatar.IAvatarItem): POGOProtos.Data.Avatar.AvatarItem;
                public static encode(message: POGOProtos.Data.Avatar.IAvatarItem, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Data.Avatar.IAvatarItem, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Avatar.AvatarItem;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Avatar.AvatarItem;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Avatar.AvatarItem;
                public static toObject(message: POGOProtos.Data.Avatar.AvatarItem, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }
        }

        interface IBackgroundToken {
            token?: (Uint8Array|null);
            expiration_time?: (number|Long|null);
            iv?: (Uint8Array|null);
        }

        class BackgroundToken implements IBackgroundToken {
            constructor(properties?: POGOProtos.Data.IBackgroundToken);
            public token: Uint8Array;
            public expiration_time: (number|Long);
            public iv: Uint8Array;
            public static create(properties?: POGOProtos.Data.IBackgroundToken): POGOProtos.Data.BackgroundToken;
            public static encode(message: POGOProtos.Data.IBackgroundToken, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: POGOProtos.Data.IBackgroundToken, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.BackgroundToken;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.BackgroundToken;
            public static fromObject(object: { [k: string]: any }): POGOProtos.Data.BackgroundToken;
            public static toObject(message: POGOProtos.Data.BackgroundToken, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        namespace Badge {

            interface IAwardedGymBadge {
                fort_id?: (string|null);
                gym_badge_type?: (POGOProtos.Enums.GymBadgeType|null);
                score?: (number|null);
                gym_badge_stats?: (POGOProtos.Data.Badge.IGymBadgeStats|null);
                last_update_timestamp_ms?: (number|Long|null);
                last_check_timestamp_ms?: (number|Long|null);
                earned_points?: (number|null);
                progress?: (number|null);
                level_up?: (boolean|null);
                name?: (string|null);
                image_url?: (string|null);
                description?: (string|null);
                latitude?: (number|null);
                longitude?: (number|null);
                raids?: (POGOProtos.Data.Raid.IPlayerRaidInfo|null);
            }

            class AwardedGymBadge implements IAwardedGymBadge {
                constructor(properties?: POGOProtos.Data.Badge.IAwardedGymBadge);
                public fort_id: string;
                public gym_badge_type: POGOProtos.Enums.GymBadgeType;
                public score: number;
                public gym_badge_stats?: (POGOProtos.Data.Badge.IGymBadgeStats|null);
                public last_update_timestamp_ms: (number|Long);
                public last_check_timestamp_ms: (number|Long);
                public earned_points: number;
                public progress: number;
                public level_up: boolean;
                public name: string;
                public image_url: string;
                public description: string;
                public latitude: number;
                public longitude: number;
                public raids?: (POGOProtos.Data.Raid.IPlayerRaidInfo|null);
                public static create(properties?: POGOProtos.Data.Badge.IAwardedGymBadge): POGOProtos.Data.Badge.AwardedGymBadge;
                public static encode(message: POGOProtos.Data.Badge.IAwardedGymBadge, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Data.Badge.IAwardedGymBadge, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Badge.AwardedGymBadge;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Badge.AwardedGymBadge;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Badge.AwardedGymBadge;
                public static toObject(message: POGOProtos.Data.Badge.AwardedGymBadge, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IBadgeCaptureReward {
                capture_reward_multiplier?: (number|null);
                avatar_template_ids?: (string[]|null);
            }

            class BadgeCaptureReward implements IBadgeCaptureReward {
                constructor(properties?: POGOProtos.Data.Badge.IBadgeCaptureReward);
                public capture_reward_multiplier: number;
                public avatar_template_ids: string[];
                public static create(properties?: POGOProtos.Data.Badge.IBadgeCaptureReward): POGOProtos.Data.Badge.BadgeCaptureReward;
                public static encode(message: POGOProtos.Data.Badge.IBadgeCaptureReward, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Data.Badge.IBadgeCaptureReward, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Badge.BadgeCaptureReward;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Badge.BadgeCaptureReward;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Badge.BadgeCaptureReward;
                public static toObject(message: POGOProtos.Data.Badge.BadgeCaptureReward, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IGymBadgeStats {
                total_time_defended_ms?: (number|Long|null);
                num_battles_won?: (number|null);
                num_battles_lost?: (number|null);
                num_berries_fed?: (number|null);
                num_deploys?: (number|null);
            }

            class GymBadgeStats implements IGymBadgeStats {
                constructor(properties?: POGOProtos.Data.Badge.IGymBadgeStats);
                public total_time_defended_ms: (number|Long);
                public num_battles_won: number;
                public num_battles_lost: number;
                public num_berries_fed: number;
                public num_deploys: number;
                public static create(properties?: POGOProtos.Data.Badge.IGymBadgeStats): POGOProtos.Data.Badge.GymBadgeStats;
                public static encode(message: POGOProtos.Data.Badge.IGymBadgeStats, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Data.Badge.IGymBadgeStats, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Badge.GymBadgeStats;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Badge.GymBadgeStats;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Badge.GymBadgeStats;
                public static toObject(message: POGOProtos.Data.Badge.GymBadgeStats, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }
        }

        namespace Battle {

            interface IBattle {
                battle_start_ms?: (number|Long|null);
                battle_end_ms?: (number|Long|null);
                battle_id?: (string|null);
                defender?: (POGOProtos.Data.Battle.IBattleParticipant|null);
                battle_log?: (POGOProtos.Data.Battle.IBattleLog|null);
                attacker?: (POGOProtos.Data.Battle.IBattleParticipant|null);
                weather_condition?: (POGOProtos.Enums.WeatherCondition|null);
            }

            class Battle implements IBattle {
                constructor(properties?: POGOProtos.Data.Battle.IBattle);
                public battle_start_ms: (number|Long);
                public battle_end_ms: (number|Long);
                public battle_id: string;
                public defender?: (POGOProtos.Data.Battle.IBattleParticipant|null);
                public battle_log?: (POGOProtos.Data.Battle.IBattleLog|null);
                public attacker?: (POGOProtos.Data.Battle.IBattleParticipant|null);
                public weather_condition: POGOProtos.Enums.WeatherCondition;
                public static create(properties?: POGOProtos.Data.Battle.IBattle): POGOProtos.Data.Battle.Battle;
                public static encode(message: POGOProtos.Data.Battle.IBattle, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Data.Battle.IBattle, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Battle.Battle;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Battle.Battle;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Battle.Battle;
                public static toObject(message: POGOProtos.Data.Battle.Battle, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IBattleAction {
                type?: (POGOProtos.Data.Battle.BattleActionType|null);
                action_start_ms?: (number|Long|null);
                duration_ms?: (number|null);
                energy_delta?: (number|null);
                attacker_index?: (number|null);
                target_index?: (number|null);
                active_pokemon_id?: (number|Long|null);
                player_joined?: (POGOProtos.Data.Battle.IBattleParticipant|null);
                battle_results?: (POGOProtos.Data.Battle.IBattleResults|null);
                damage_windows_start_timestamp_ms?: (number|Long|null);
                damage_windows_end_timestamp_ms?: (number|Long|null);
                player_left?: (POGOProtos.Data.Battle.IBattleParticipant|null);
                target_pokemon_id?: (number|Long|null);
            }

            class BattleAction implements IBattleAction {
                constructor(properties?: POGOProtos.Data.Battle.IBattleAction);
                public type: POGOProtos.Data.Battle.BattleActionType;
                public action_start_ms: (number|Long);
                public duration_ms: number;
                public energy_delta: number;
                public attacker_index: number;
                public target_index: number;
                public active_pokemon_id: (number|Long);
                public player_joined?: (POGOProtos.Data.Battle.IBattleParticipant|null);
                public battle_results?: (POGOProtos.Data.Battle.IBattleResults|null);
                public damage_windows_start_timestamp_ms: (number|Long);
                public damage_windows_end_timestamp_ms: (number|Long);
                public player_left?: (POGOProtos.Data.Battle.IBattleParticipant|null);
                public target_pokemon_id: (number|Long);
                public static create(properties?: POGOProtos.Data.Battle.IBattleAction): POGOProtos.Data.Battle.BattleAction;
                public static encode(message: POGOProtos.Data.Battle.IBattleAction, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Data.Battle.IBattleAction, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Battle.BattleAction;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Battle.BattleAction;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Battle.BattleAction;
                public static toObject(message: POGOProtos.Data.Battle.BattleAction, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            enum BattleActionType {
                ACTION_UNSET = 0,
                ACTION_ATTACK = 1,
                ACTION_DODGE = 2,
                ACTION_SPECIAL_ATTACK = 3,
                ACTION_SWAP_POKEMON = 4,
                ACTION_FAINT = 5,
                ACTION_PLAYER_JOIN = 6,
                ACTION_PLAYER_QUIT = 7,
                ACTION_VICTORY = 8,
                ACTION_DEFEAT = 9,
                ACTION_TIMED_OUT = 10
            }

            interface IBattleLog {
                state?: (POGOProtos.Data.Battle.BattleState|null);
                battle_type?: (POGOProtos.Data.Battle.BattleType|null);
                server_ms?: (number|Long|null);
                battle_actions?: (POGOProtos.Data.Battle.IBattleAction[]|null);
                battle_start_timestamp_ms?: (number|Long|null);
                battle_end_timestamp_ms?: (number|Long|null);
            }

            class BattleLog implements IBattleLog {
                constructor(properties?: POGOProtos.Data.Battle.IBattleLog);
                public state: POGOProtos.Data.Battle.BattleState;
                public battle_type: POGOProtos.Data.Battle.BattleType;
                public server_ms: (number|Long);
                public battle_actions: POGOProtos.Data.Battle.IBattleAction[];
                public battle_start_timestamp_ms: (number|Long);
                public battle_end_timestamp_ms: (number|Long);
                public static create(properties?: POGOProtos.Data.Battle.IBattleLog): POGOProtos.Data.Battle.BattleLog;
                public static encode(message: POGOProtos.Data.Battle.IBattleLog, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Data.Battle.IBattleLog, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Battle.BattleLog;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Battle.BattleLog;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Battle.BattleLog;
                public static toObject(message: POGOProtos.Data.Battle.BattleLog, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IBattleParticipant {
                active_pokemon?: (POGOProtos.Data.Battle.IBattlePokemonInfo|null);
                trainer_public_profile?: (POGOProtos.Data.Player.IPlayerPublicProfile|null);
                reverse_pokemon?: (POGOProtos.Data.Battle.IBattlePokemonInfo[]|null);
                defeated_pokemon?: (POGOProtos.Data.Battle.IBattlePokemonInfo[]|null);
                lobby_pokemon?: (POGOProtos.Map.Pokemon.ILobbyPokemon[]|null);
                damage_dealt?: (number|null);
                super_effective_charge_move?: (boolean|null);
                weather_boosted?: (boolean|null);
            }

            class BattleParticipant implements IBattleParticipant {
                constructor(properties?: POGOProtos.Data.Battle.IBattleParticipant);
                public active_pokemon?: (POGOProtos.Data.Battle.IBattlePokemonInfo|null);
                public trainer_public_profile?: (POGOProtos.Data.Player.IPlayerPublicProfile|null);
                public reverse_pokemon: POGOProtos.Data.Battle.IBattlePokemonInfo[];
                public defeated_pokemon: POGOProtos.Data.Battle.IBattlePokemonInfo[];
                public lobby_pokemon: POGOProtos.Map.Pokemon.ILobbyPokemon[];
                public damage_dealt: number;
                public super_effective_charge_move: boolean;
                public weather_boosted: boolean;
                public static create(properties?: POGOProtos.Data.Battle.IBattleParticipant): POGOProtos.Data.Battle.BattleParticipant;
                public static encode(message: POGOProtos.Data.Battle.IBattleParticipant, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Data.Battle.IBattleParticipant, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Battle.BattleParticipant;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Battle.BattleParticipant;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Battle.BattleParticipant;
                public static toObject(message: POGOProtos.Data.Battle.BattleParticipant, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IBattlePokemonInfo {
                pokemon_data?: (POGOProtos.Data.IPokemonData|null);
                current_health?: (number|null);
                current_energy?: (number|null);
            }

            class BattlePokemonInfo implements IBattlePokemonInfo {
                constructor(properties?: POGOProtos.Data.Battle.IBattlePokemonInfo);
                public pokemon_data?: (POGOProtos.Data.IPokemonData|null);
                public current_health: number;
                public current_energy: number;
                public static create(properties?: POGOProtos.Data.Battle.IBattlePokemonInfo): POGOProtos.Data.Battle.BattlePokemonInfo;
                public static encode(message: POGOProtos.Data.Battle.IBattlePokemonInfo, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Data.Battle.IBattlePokemonInfo, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Battle.BattlePokemonInfo;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Battle.BattlePokemonInfo;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Battle.BattlePokemonInfo;
                public static toObject(message: POGOProtos.Data.Battle.BattlePokemonInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IBattleResults {
                gym_state?: (POGOProtos.Data.Gym.IGymState|null);
                attackers?: (POGOProtos.Data.Battle.IBattleParticipant[]|null);
                player_xp_awarded?: (number[]|null);
                next_defender_pokemon_id?: (number|Long|null);
                gym_points_delta?: (number|null);
                gym_status?: (POGOProtos.Data.Gym.IGymStatusAndDefenders|null);
                participation?: (POGOProtos.Data.Raid.IParticipation[]|null);
                raid_item_rewards?: (POGOProtos.Inventory.ILoot[]|null);
                post_raid_encounter?: (POGOProtos.Data.Raid.IRaidEncounter[]|null);
                gym_badge?: (POGOProtos.Data.Badge.IAwardedGymBadge[]|null);
                default_raid_item_rewards?: (POGOProtos.Inventory.ILoot[]|null);
            }

            class BattleResults implements IBattleResults {
                constructor(properties?: POGOProtos.Data.Battle.IBattleResults);
                public gym_state?: (POGOProtos.Data.Gym.IGymState|null);
                public attackers: POGOProtos.Data.Battle.IBattleParticipant[];
                public player_xp_awarded: number[];
                public next_defender_pokemon_id: (number|Long);
                public gym_points_delta: number;
                public gym_status?: (POGOProtos.Data.Gym.IGymStatusAndDefenders|null);
                public participation: POGOProtos.Data.Raid.IParticipation[];
                public raid_item_rewards: POGOProtos.Inventory.ILoot[];
                public post_raid_encounter: POGOProtos.Data.Raid.IRaidEncounter[];
                public gym_badge: POGOProtos.Data.Badge.IAwardedGymBadge[];
                public default_raid_item_rewards: POGOProtos.Inventory.ILoot[];
                public static create(properties?: POGOProtos.Data.Battle.IBattleResults): POGOProtos.Data.Battle.BattleResults;
                public static encode(message: POGOProtos.Data.Battle.IBattleResults, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Data.Battle.IBattleResults, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Battle.BattleResults;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Battle.BattleResults;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Battle.BattleResults;
                public static toObject(message: POGOProtos.Data.Battle.BattleResults, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            enum BattleState {
                STATE_UNSET = 0,
                ACTIVE = 1,
                VICTORY = 2,
                DEFEATED = 3,
                TIMED_OUT = 4
            }

            enum BattleType {
                BATTLE_TYPE_UNSET = 0,
                BATTLE_TYPE_NORMAL = 1,
                BATTLE_TYPE_TRAINING = 2,
                BATTLE_TYPE_RAID = 3
            }

            interface IBattleUpdate {
                battle_log?: (POGOProtos.Data.Battle.IBattleLog|null);
                battle_id?: (string|null);
                active_defender?: (POGOProtos.Data.Battle.IBattlePokemonInfo|null);
                active_attacker?: (POGOProtos.Data.Battle.IBattlePokemonInfo|null);
            }

            class BattleUpdate implements IBattleUpdate {
                constructor(properties?: POGOProtos.Data.Battle.IBattleUpdate);
                public battle_log?: (POGOProtos.Data.Battle.IBattleLog|null);
                public battle_id: string;
                public active_defender?: (POGOProtos.Data.Battle.IBattlePokemonInfo|null);
                public active_attacker?: (POGOProtos.Data.Battle.IBattlePokemonInfo|null);
                public static create(properties?: POGOProtos.Data.Battle.IBattleUpdate): POGOProtos.Data.Battle.BattleUpdate;
                public static encode(message: POGOProtos.Data.Battle.IBattleUpdate, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Data.Battle.IBattleUpdate, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Battle.BattleUpdate;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Battle.BattleUpdate;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Battle.BattleUpdate;
                public static toObject(message: POGOProtos.Data.Battle.BattleUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }
        }

        interface IBuddyPokemon {
            id?: (number|Long|null);
            start_km_walked?: (number|null);
            last_km_awarded?: (number|null);
        }

        class BuddyPokemon implements IBuddyPokemon {
            constructor(properties?: POGOProtos.Data.IBuddyPokemon);
            public id: (number|Long);
            public start_km_walked: number;
            public last_km_awarded: number;
            public static create(properties?: POGOProtos.Data.IBuddyPokemon): POGOProtos.Data.BuddyPokemon;
            public static encode(message: POGOProtos.Data.IBuddyPokemon, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: POGOProtos.Data.IBuddyPokemon, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.BuddyPokemon;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.BuddyPokemon;
            public static fromObject(object: { [k: string]: any }): POGOProtos.Data.BuddyPokemon;
            public static toObject(message: POGOProtos.Data.BuddyPokemon, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        namespace Capture {

            interface ICaptureAward {
                activity_type?: (POGOProtos.Enums.ActivityType[]|null);
                xp?: (number[]|null);
                candy?: (number[]|null);
                stardust?: (number[]|null);
            }

            class CaptureAward implements ICaptureAward {
                constructor(properties?: POGOProtos.Data.Capture.ICaptureAward);
                public activity_type: POGOProtos.Enums.ActivityType[];
                public xp: number[];
                public candy: number[];
                public stardust: number[];
                public static create(properties?: POGOProtos.Data.Capture.ICaptureAward): POGOProtos.Data.Capture.CaptureAward;
                public static encode(message: POGOProtos.Data.Capture.ICaptureAward, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Data.Capture.ICaptureAward, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Capture.CaptureAward;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Capture.CaptureAward;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Capture.CaptureAward;
                public static toObject(message: POGOProtos.Data.Capture.CaptureAward, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface ICaptureProbability {
                pokeball_type?: (POGOProtos.Inventory.Item.ItemId[]|null);
                capture_probability?: (number[]|null);
                reticle_difficulty_scale?: (number|null);
            }

            class CaptureProbability implements ICaptureProbability {
                constructor(properties?: POGOProtos.Data.Capture.ICaptureProbability);
                public pokeball_type: POGOProtos.Inventory.Item.ItemId[];
                public capture_probability: number[];
                public reticle_difficulty_scale: number;
                public static create(properties?: POGOProtos.Data.Capture.ICaptureProbability): POGOProtos.Data.Capture.CaptureProbability;
                public static encode(message: POGOProtos.Data.Capture.ICaptureProbability, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Data.Capture.ICaptureProbability, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Capture.CaptureProbability;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Capture.CaptureProbability;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Capture.CaptureProbability;
                public static toObject(message: POGOProtos.Data.Capture.CaptureProbability, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }
        }

        interface IClientVersion {
            min_version?: (string|null);
        }

        class ClientVersion implements IClientVersion {
            constructor(properties?: POGOProtos.Data.IClientVersion);
            public min_version: string;
            public static create(properties?: POGOProtos.Data.IClientVersion): POGOProtos.Data.ClientVersion;
            public static encode(message: POGOProtos.Data.IClientVersion, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: POGOProtos.Data.IClientVersion, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.ClientVersion;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.ClientVersion;
            public static fromObject(object: { [k: string]: any }): POGOProtos.Data.ClientVersion;
            public static toObject(message: POGOProtos.Data.ClientVersion, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IDownloadUrlEntry {
            asset_id?: (string|null);
            url?: (string|null);
            size?: (number|null);
            checksum?: (number|null);
        }

        class DownloadUrlEntry implements IDownloadUrlEntry {
            constructor(properties?: POGOProtos.Data.IDownloadUrlEntry);
            public asset_id: string;
            public url: string;
            public size: number;
            public checksum: number;
            public static create(properties?: POGOProtos.Data.IDownloadUrlEntry): POGOProtos.Data.DownloadUrlEntry;
            public static encode(message: POGOProtos.Data.IDownloadUrlEntry, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: POGOProtos.Data.IDownloadUrlEntry, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.DownloadUrlEntry;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.DownloadUrlEntry;
            public static fromObject(object: { [k: string]: any }): POGOProtos.Data.DownloadUrlEntry;
            public static toObject(message: POGOProtos.Data.DownloadUrlEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IFoodValue {
            motivation_increase?: (number|null);
            cp_increase?: (number|null);
            food_item?: (POGOProtos.Inventory.Item.ItemId|null);
        }

        class FoodValue implements IFoodValue {
            constructor(properties?: POGOProtos.Data.IFoodValue);
            public motivation_increase: number;
            public cp_increase: number;
            public food_item: POGOProtos.Inventory.Item.ItemId;
            public static create(properties?: POGOProtos.Data.IFoodValue): POGOProtos.Data.FoodValue;
            public static encode(message: POGOProtos.Data.IFoodValue, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: POGOProtos.Data.IFoodValue, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.FoodValue;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.FoodValue;
            public static fromObject(object: { [k: string]: any }): POGOProtos.Data.FoodValue;
            public static toObject(message: POGOProtos.Data.FoodValue, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        namespace Gym {

            interface IGymDefender {
                motivated_pokemon?: (POGOProtos.Map.Pokemon.IMotivatedPokemon|null);
                deployment_totals?: (POGOProtos.Data.Gym.GymDefender.IDeploymentTotals|null);
                trainer_public_profile?: (POGOProtos.Data.Player.IPlayerPublicProfile|null);
            }

            class GymDefender implements IGymDefender {
                constructor(properties?: POGOProtos.Data.Gym.IGymDefender);
                public motivated_pokemon?: (POGOProtos.Map.Pokemon.IMotivatedPokemon|null);
                public deployment_totals?: (POGOProtos.Data.Gym.GymDefender.IDeploymentTotals|null);
                public trainer_public_profile?: (POGOProtos.Data.Player.IPlayerPublicProfile|null);
                public static create(properties?: POGOProtos.Data.Gym.IGymDefender): POGOProtos.Data.Gym.GymDefender;
                public static encode(message: POGOProtos.Data.Gym.IGymDefender, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Data.Gym.IGymDefender, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Gym.GymDefender;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Gym.GymDefender;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Gym.GymDefender;
                public static toObject(message: POGOProtos.Data.Gym.GymDefender, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace GymDefender {

                interface IDeploymentTotals {
                    times_fed?: (number|null);
                    battles_won?: (number|null);
                    battles_lost?: (number|null);
                    deployment_duration_ms?: (number|Long|null);
                }

                class DeploymentTotals implements IDeploymentTotals {
                    constructor(properties?: POGOProtos.Data.Gym.GymDefender.IDeploymentTotals);
                    public times_fed: number;
                    public battles_won: number;
                    public battles_lost: number;
                    public deployment_duration_ms: (number|Long);
                    public static create(properties?: POGOProtos.Data.Gym.GymDefender.IDeploymentTotals): POGOProtos.Data.Gym.GymDefender.DeploymentTotals;
                    public static encode(message: POGOProtos.Data.Gym.GymDefender.IDeploymentTotals, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Data.Gym.GymDefender.IDeploymentTotals, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Gym.GymDefender.DeploymentTotals;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Gym.GymDefender.DeploymentTotals;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Gym.GymDefender.DeploymentTotals;
                    public static toObject(message: POGOProtos.Data.Gym.GymDefender.DeploymentTotals, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }
            }

            interface IGymMembership {
                pokemon_data?: (POGOProtos.Data.IPokemonData|null);
                trainer_public_profile?: (POGOProtos.Data.Player.IPlayerPublicProfile|null);
                training_pokemon?: (POGOProtos.Data.IPokemonData|null);
            }

            class GymMembership implements IGymMembership {
                constructor(properties?: POGOProtos.Data.Gym.IGymMembership);
                public pokemon_data?: (POGOProtos.Data.IPokemonData|null);
                public trainer_public_profile?: (POGOProtos.Data.Player.IPlayerPublicProfile|null);
                public training_pokemon?: (POGOProtos.Data.IPokemonData|null);
                public static create(properties?: POGOProtos.Data.Gym.IGymMembership): POGOProtos.Data.Gym.GymMembership;
                public static encode(message: POGOProtos.Data.Gym.IGymMembership, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Data.Gym.IGymMembership, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Gym.GymMembership;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Gym.GymMembership;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Gym.GymMembership;
                public static toObject(message: POGOProtos.Data.Gym.GymMembership, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IGymState {
                fort_data?: (POGOProtos.Map.Fort.IFortData|null);
                memberships?: (POGOProtos.Data.Gym.IGymMembership[]|null);
                deploy_lockout?: (boolean|null);
            }

            class GymState implements IGymState {
                constructor(properties?: POGOProtos.Data.Gym.IGymState);
                public fort_data?: (POGOProtos.Map.Fort.IFortData|null);
                public memberships: POGOProtos.Data.Gym.IGymMembership[];
                public deploy_lockout: boolean;
                public static create(properties?: POGOProtos.Data.Gym.IGymState): POGOProtos.Data.Gym.GymState;
                public static encode(message: POGOProtos.Data.Gym.IGymState, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Data.Gym.IGymState, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Gym.GymState;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Gym.GymState;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Gym.GymState;
                public static toObject(message: POGOProtos.Data.Gym.GymState, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IGymStatusAndDefenders {
                pokemon_fort_proto?: (POGOProtos.Map.Fort.IFortData|null);
                gym_defender?: (POGOProtos.Data.Gym.IGymDefender[]|null);
            }

            class GymStatusAndDefenders implements IGymStatusAndDefenders {
                constructor(properties?: POGOProtos.Data.Gym.IGymStatusAndDefenders);
                public pokemon_fort_proto?: (POGOProtos.Map.Fort.IFortData|null);
                public gym_defender: POGOProtos.Data.Gym.IGymDefender[];
                public static create(properties?: POGOProtos.Data.Gym.IGymStatusAndDefenders): POGOProtos.Data.Gym.GymStatusAndDefenders;
                public static encode(message: POGOProtos.Data.Gym.IGymStatusAndDefenders, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Data.Gym.IGymStatusAndDefenders, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Gym.GymStatusAndDefenders;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Gym.GymStatusAndDefenders;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Gym.GymStatusAndDefenders;
                public static toObject(message: POGOProtos.Data.Gym.GymStatusAndDefenders, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }
        }

        namespace Logs {

            interface IActionLogEntry {
                timestamp_ms?: (number|Long|null);
                sfida?: (boolean|null);
                catch_pokemon?: (POGOProtos.Data.Logs.ICatchPokemonLogEntry|null);
                fort_search?: (POGOProtos.Data.Logs.IFortSearchLogEntry|null);
                buddy_pokemon?: (POGOProtos.Data.Logs.IBuddyPokemonLogEntry|null);
                raid_rewards?: (POGOProtos.Data.Logs.IRaidRewardsLogEntry|null);
                passcode_rewards?: (POGOProtos.Data.Logs.IPasscodeRewardsLogEntry|null);
                complete_quest?: (POGOProtos.Data.Logs.ICompleteQuestLogEntry|null);
                complete_quest_stamp_card?: (POGOProtos.Data.Logs.ICompleteQuestStampCardLogEntry|null);
                complete_quest_pokemon_encounter?: (POGOProtos.Data.Logs.ICompleteQuestPokemonEncounterLogEntry|null);
            }

            class ActionLogEntry implements IActionLogEntry {
                constructor(properties?: POGOProtos.Data.Logs.IActionLogEntry);
                public timestamp_ms: (number|Long);
                public sfida: boolean;
                public catch_pokemon?: (POGOProtos.Data.Logs.ICatchPokemonLogEntry|null);
                public fort_search?: (POGOProtos.Data.Logs.IFortSearchLogEntry|null);
                public buddy_pokemon?: (POGOProtos.Data.Logs.IBuddyPokemonLogEntry|null);
                public raid_rewards?: (POGOProtos.Data.Logs.IRaidRewardsLogEntry|null);
                public passcode_rewards?: (POGOProtos.Data.Logs.IPasscodeRewardsLogEntry|null);
                public complete_quest?: (POGOProtos.Data.Logs.ICompleteQuestLogEntry|null);
                public complete_quest_stamp_card?: (POGOProtos.Data.Logs.ICompleteQuestStampCardLogEntry|null);
                public complete_quest_pokemon_encounter?: (POGOProtos.Data.Logs.ICompleteQuestPokemonEncounterLogEntry|null);
                public Action?: ("catch_pokemon"|"fort_search"|"buddy_pokemon"|"raid_rewards"|"passcode_rewards"|"complete_quest"|"complete_quest_stamp_card"|"complete_quest_pokemon_encounter");
                public static create(properties?: POGOProtos.Data.Logs.IActionLogEntry): POGOProtos.Data.Logs.ActionLogEntry;
                public static encode(message: POGOProtos.Data.Logs.IActionLogEntry, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Data.Logs.IActionLogEntry, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Logs.ActionLogEntry;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Logs.ActionLogEntry;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Logs.ActionLogEntry;
                public static toObject(message: POGOProtos.Data.Logs.ActionLogEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IBuddyPokemonLogEntry {
                result?: (POGOProtos.Data.Logs.BuddyPokemonLogEntry.Result|null);
                pokemon_id?: (POGOProtos.Enums.PokemonId|null);
                amount?: (number|null);
                pokemon_display?: (POGOProtos.Data.IPokemonDisplay|null);
                pokemon?: (number|Long|null);
            }

            class BuddyPokemonLogEntry implements IBuddyPokemonLogEntry {
                constructor(properties?: POGOProtos.Data.Logs.IBuddyPokemonLogEntry);
                public result: POGOProtos.Data.Logs.BuddyPokemonLogEntry.Result;
                public pokemon_id: POGOProtos.Enums.PokemonId;
                public amount: number;
                public pokemon_display?: (POGOProtos.Data.IPokemonDisplay|null);
                public pokemon: (number|Long);
                public static create(properties?: POGOProtos.Data.Logs.IBuddyPokemonLogEntry): POGOProtos.Data.Logs.BuddyPokemonLogEntry;
                public static encode(message: POGOProtos.Data.Logs.IBuddyPokemonLogEntry, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Data.Logs.IBuddyPokemonLogEntry, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Logs.BuddyPokemonLogEntry;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Logs.BuddyPokemonLogEntry;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Logs.BuddyPokemonLogEntry;
                public static toObject(message: POGOProtos.Data.Logs.BuddyPokemonLogEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace BuddyPokemonLogEntry {

                enum Result {
                    UNSET = 0,
                    CANDY_FOUND = 1
                }
            }

            interface ICatchPokemonLogEntry {
                result?: (POGOProtos.Data.Logs.CatchPokemonLogEntry.Result|null);
                pokemon_id?: (POGOProtos.Enums.PokemonId|null);
                combat_points?: (number|null);
                pokemon_data_id?: (number|Long|null);
                pokemon_display?: (POGOProtos.Data.IPokemonDisplay|null);
            }

            class CatchPokemonLogEntry implements ICatchPokemonLogEntry {
                constructor(properties?: POGOProtos.Data.Logs.ICatchPokemonLogEntry);
                public result: POGOProtos.Data.Logs.CatchPokemonLogEntry.Result;
                public pokemon_id: POGOProtos.Enums.PokemonId;
                public combat_points: number;
                public pokemon_data_id: (number|Long);
                public pokemon_display?: (POGOProtos.Data.IPokemonDisplay|null);
                public static create(properties?: POGOProtos.Data.Logs.ICatchPokemonLogEntry): POGOProtos.Data.Logs.CatchPokemonLogEntry;
                public static encode(message: POGOProtos.Data.Logs.ICatchPokemonLogEntry, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Data.Logs.ICatchPokemonLogEntry, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Logs.CatchPokemonLogEntry;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Logs.CatchPokemonLogEntry;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Logs.CatchPokemonLogEntry;
                public static toObject(message: POGOProtos.Data.Logs.CatchPokemonLogEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace CatchPokemonLogEntry {

                enum Result {
                    UNSET = 0,
                    POKEMON_CAPTURED = 1,
                    POKEMON_FLED = 2,
                    POKEMON_HATCHED = 3
                }
            }

            interface ICompleteQuestLogEntry {
                result?: (POGOProtos.Data.Logs.CompleteQuestLogEntry.Result|null);
                quest?: (POGOProtos.Data.Quests.IClientQuest|null);
                stamp?: (POGOProtos.Data.Quests.IQuestStamp[]|null);
            }

            class CompleteQuestLogEntry implements ICompleteQuestLogEntry {
                constructor(properties?: POGOProtos.Data.Logs.ICompleteQuestLogEntry);
                public result: POGOProtos.Data.Logs.CompleteQuestLogEntry.Result;
                public quest?: (POGOProtos.Data.Quests.IClientQuest|null);
                public stamp: POGOProtos.Data.Quests.IQuestStamp[];
                public static create(properties?: POGOProtos.Data.Logs.ICompleteQuestLogEntry): POGOProtos.Data.Logs.CompleteQuestLogEntry;
                public static encode(message: POGOProtos.Data.Logs.ICompleteQuestLogEntry, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Data.Logs.ICompleteQuestLogEntry, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Logs.CompleteQuestLogEntry;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Logs.CompleteQuestLogEntry;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Logs.CompleteQuestLogEntry;
                public static toObject(message: POGOProtos.Data.Logs.CompleteQuestLogEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace CompleteQuestLogEntry {

                enum Result {
                    UNSET = 0,
                    SUCCESS = 1
                }
            }

            interface ICompleteQuestPokemonEncounterLogEntry {
                result?: (POGOProtos.Data.Logs.CompleteQuestPokemonEncounterLogEntry.Result|null);
                pokedex_number?: (number|null);
                combat_points?: (number|null);
                pokemon_id?: (number|Long|null);
                pokemon_display?: (POGOProtos.Data.IPokemonDisplay|null);
                encounter_type?: (POGOProtos.Enums.EncounterType|null);
            }

            class CompleteQuestPokemonEncounterLogEntry implements ICompleteQuestPokemonEncounterLogEntry {
                constructor(properties?: POGOProtos.Data.Logs.ICompleteQuestPokemonEncounterLogEntry);
                public result: POGOProtos.Data.Logs.CompleteQuestPokemonEncounterLogEntry.Result;
                public pokedex_number: number;
                public combat_points: number;
                public pokemon_id: (number|Long);
                public pokemon_display?: (POGOProtos.Data.IPokemonDisplay|null);
                public encounter_type: POGOProtos.Enums.EncounterType;
                public static create(properties?: POGOProtos.Data.Logs.ICompleteQuestPokemonEncounterLogEntry): POGOProtos.Data.Logs.CompleteQuestPokemonEncounterLogEntry;
                public static encode(message: POGOProtos.Data.Logs.ICompleteQuestPokemonEncounterLogEntry, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Data.Logs.ICompleteQuestPokemonEncounterLogEntry, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Logs.CompleteQuestPokemonEncounterLogEntry;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Logs.CompleteQuestPokemonEncounterLogEntry;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Logs.CompleteQuestPokemonEncounterLogEntry;
                public static toObject(message: POGOProtos.Data.Logs.CompleteQuestPokemonEncounterLogEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace CompleteQuestPokemonEncounterLogEntry {

                enum Result {
                    UNSET = 0,
                    POKEMON_CAPTURED = 1,
                    POKEMON_FLED = 2
                }
            }

            interface ICompleteQuestStampCardLogEntry {
                result?: (POGOProtos.Data.Logs.CompleteQuestStampCardLogEntry.Result|null);
                reward?: (POGOProtos.Data.Quests.IQuestReward[]|null);
            }

            class CompleteQuestStampCardLogEntry implements ICompleteQuestStampCardLogEntry {
                constructor(properties?: POGOProtos.Data.Logs.ICompleteQuestStampCardLogEntry);
                public result: POGOProtos.Data.Logs.CompleteQuestStampCardLogEntry.Result;
                public reward: POGOProtos.Data.Quests.IQuestReward[];
                public static create(properties?: POGOProtos.Data.Logs.ICompleteQuestStampCardLogEntry): POGOProtos.Data.Logs.CompleteQuestStampCardLogEntry;
                public static encode(message: POGOProtos.Data.Logs.ICompleteQuestStampCardLogEntry, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Data.Logs.ICompleteQuestStampCardLogEntry, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Logs.CompleteQuestStampCardLogEntry;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Logs.CompleteQuestStampCardLogEntry;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Logs.CompleteQuestStampCardLogEntry;
                public static toObject(message: POGOProtos.Data.Logs.CompleteQuestStampCardLogEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace CompleteQuestStampCardLogEntry {

                enum Result {
                    UNSET = 0,
                    SUCCESS = 1
                }
            }

            interface IFortSearchLogEntry {
                result?: (POGOProtos.Data.Logs.FortSearchLogEntry.Result|null);
                fort_id?: (string|null);
                items?: (POGOProtos.Inventory.Item.IItemData[]|null);
                eggs?: (number|null);
                pokemon_eggs?: (POGOProtos.Data.IPokemonData[]|null);
                fort_type?: (POGOProtos.Map.Fort.FortType|null);
                awarded_items?: (POGOProtos.Inventory.Item.IItemData[]|null);
                bonus_items?: (POGOProtos.Inventory.Item.IItemData[]|null);
                team_bonus_items?: (POGOProtos.Inventory.Item.IItemData[]|null);
            }

            class FortSearchLogEntry implements IFortSearchLogEntry {
                constructor(properties?: POGOProtos.Data.Logs.IFortSearchLogEntry);
                public result: POGOProtos.Data.Logs.FortSearchLogEntry.Result;
                public fort_id: string;
                public items: POGOProtos.Inventory.Item.IItemData[];
                public eggs: number;
                public pokemon_eggs: POGOProtos.Data.IPokemonData[];
                public fort_type: POGOProtos.Map.Fort.FortType;
                public awarded_items: POGOProtos.Inventory.Item.IItemData[];
                public bonus_items: POGOProtos.Inventory.Item.IItemData[];
                public team_bonus_items: POGOProtos.Inventory.Item.IItemData[];
                public static create(properties?: POGOProtos.Data.Logs.IFortSearchLogEntry): POGOProtos.Data.Logs.FortSearchLogEntry;
                public static encode(message: POGOProtos.Data.Logs.IFortSearchLogEntry, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Data.Logs.IFortSearchLogEntry, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Logs.FortSearchLogEntry;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Logs.FortSearchLogEntry;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Logs.FortSearchLogEntry;
                public static toObject(message: POGOProtos.Data.Logs.FortSearchLogEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace FortSearchLogEntry {

                enum Result {
                    UNSET = 0,
                    SUCCESS = 1
                }
            }

            interface IPasscodeRewardsLogEntry {
                result?: (POGOProtos.Data.Logs.PasscodeRewardsLogEntry.Result|null);
                passcode?: (string|null);
                rewards?: (POGOProtos.Data.IRedeemPasscodeReward|null);
            }

            class PasscodeRewardsLogEntry implements IPasscodeRewardsLogEntry {
                constructor(properties?: POGOProtos.Data.Logs.IPasscodeRewardsLogEntry);
                public result: POGOProtos.Data.Logs.PasscodeRewardsLogEntry.Result;
                public passcode: string;
                public rewards?: (POGOProtos.Data.IRedeemPasscodeReward|null);
                public static create(properties?: POGOProtos.Data.Logs.IPasscodeRewardsLogEntry): POGOProtos.Data.Logs.PasscodeRewardsLogEntry;
                public static encode(message: POGOProtos.Data.Logs.IPasscodeRewardsLogEntry, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Data.Logs.IPasscodeRewardsLogEntry, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Logs.PasscodeRewardsLogEntry;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Logs.PasscodeRewardsLogEntry;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Logs.PasscodeRewardsLogEntry;
                public static toObject(message: POGOProtos.Data.Logs.PasscodeRewardsLogEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace PasscodeRewardsLogEntry {

                enum Result {
                    UNSET = 0,
                    SUCCESS = 1
                }
            }

            interface IRaidRewardsLogEntry {
                result?: (POGOProtos.Data.Logs.RaidRewardsLogEntry.Result|null);
                is_exclusive?: (boolean|null);
                items?: (POGOProtos.Inventory.Item.IItemData[]|null);
                default_rewards?: (POGOProtos.Inventory.Item.IItemData[]|null);
                stardust?: (number|null);
            }

            class RaidRewardsLogEntry implements IRaidRewardsLogEntry {
                constructor(properties?: POGOProtos.Data.Logs.IRaidRewardsLogEntry);
                public result: POGOProtos.Data.Logs.RaidRewardsLogEntry.Result;
                public is_exclusive: boolean;
                public items: POGOProtos.Inventory.Item.IItemData[];
                public default_rewards: POGOProtos.Inventory.Item.IItemData[];
                public stardust: number;
                public static create(properties?: POGOProtos.Data.Logs.IRaidRewardsLogEntry): POGOProtos.Data.Logs.RaidRewardsLogEntry;
                public static encode(message: POGOProtos.Data.Logs.IRaidRewardsLogEntry, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Data.Logs.IRaidRewardsLogEntry, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Logs.RaidRewardsLogEntry;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Logs.RaidRewardsLogEntry;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Logs.RaidRewardsLogEntry;
                public static toObject(message: POGOProtos.Data.Logs.RaidRewardsLogEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace RaidRewardsLogEntry {

                enum Result {
                    UNSET = 0,
                    SUCCESS = 1
                }
            }
        }

        namespace News {

            interface ICurrentNews {
                news_articles?: (POGOProtos.Data.News.INewsArticle[]|null);
                news_strings_url?: (string|null);
                last_updated_timestamp?: (number|Long|null);
            }

            class CurrentNews implements ICurrentNews {
                constructor(properties?: POGOProtos.Data.News.ICurrentNews);
                public news_articles: POGOProtos.Data.News.INewsArticle[];
                public news_strings_url: string;
                public last_updated_timestamp: (number|Long);
                public static create(properties?: POGOProtos.Data.News.ICurrentNews): POGOProtos.Data.News.CurrentNews;
                public static encode(message: POGOProtos.Data.News.ICurrentNews, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Data.News.ICurrentNews, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.News.CurrentNews;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.News.CurrentNews;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Data.News.CurrentNews;
                public static toObject(message: POGOProtos.Data.News.CurrentNews, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface INewsArticle {
                id?: (string|null);
                image_url?: (string[]|null);
                header_key?: (string|null);
                subheader_key?: (string|null);
                main_text_key?: (string|null);
                timestamp?: (number|Long|null);
                template?: (POGOProtos.Data.News.NewsArticle.NewsTemplate|null);
                enabled?: (boolean|null);
                article_read?: (boolean|null);
            }

            class NewsArticle implements INewsArticle {
                constructor(properties?: POGOProtos.Data.News.INewsArticle);
                public id: string;
                public image_url: string[];
                public header_key: string;
                public subheader_key: string;
                public main_text_key: string;
                public timestamp: (number|Long);
                public template: POGOProtos.Data.News.NewsArticle.NewsTemplate;
                public enabled: boolean;
                public article_read: boolean;
                public static create(properties?: POGOProtos.Data.News.INewsArticle): POGOProtos.Data.News.NewsArticle;
                public static encode(message: POGOProtos.Data.News.INewsArticle, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Data.News.INewsArticle, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.News.NewsArticle;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.News.NewsArticle;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Data.News.NewsArticle;
                public static toObject(message: POGOProtos.Data.News.NewsArticle, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace NewsArticle {

                enum NewsTemplate {
                    UNSET = 0,
                    DEFAULT_TEMPLATE = 1
                }
            }
        }

        namespace Player {

            interface IContactSettings {
                send_marketing_emails?: (boolean|null);
                send_push_notifications?: (boolean|null);
            }

            class ContactSettings implements IContactSettings {
                constructor(properties?: POGOProtos.Data.Player.IContactSettings);
                public send_marketing_emails: boolean;
                public send_push_notifications: boolean;
                public static create(properties?: POGOProtos.Data.Player.IContactSettings): POGOProtos.Data.Player.ContactSettings;
                public static encode(message: POGOProtos.Data.Player.IContactSettings, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Data.Player.IContactSettings, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Player.ContactSettings;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Player.ContactSettings;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Player.ContactSettings;
                public static toObject(message: POGOProtos.Data.Player.ContactSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface ICurrency {
                name?: (string|null);
                amount?: (number|null);
            }

            class Currency implements ICurrency {
                constructor(properties?: POGOProtos.Data.Player.ICurrency);
                public name: string;
                public amount: number;
                public static create(properties?: POGOProtos.Data.Player.ICurrency): POGOProtos.Data.Player.Currency;
                public static encode(message: POGOProtos.Data.Player.ICurrency, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Data.Player.ICurrency, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Player.Currency;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Player.Currency;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Player.Currency;
                public static toObject(message: POGOProtos.Data.Player.Currency, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IDailyBonus {
                next_collected_timestamp_ms?: (number|Long|null);
                next_defender_bonus_collect_timestamp_ms?: (number|Long|null);
            }

            class DailyBonus implements IDailyBonus {
                constructor(properties?: POGOProtos.Data.Player.IDailyBonus);
                public next_collected_timestamp_ms: (number|Long);
                public next_defender_bonus_collect_timestamp_ms: (number|Long);
                public static create(properties?: POGOProtos.Data.Player.IDailyBonus): POGOProtos.Data.Player.DailyBonus;
                public static encode(message: POGOProtos.Data.Player.IDailyBonus, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Data.Player.IDailyBonus, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Player.DailyBonus;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Player.DailyBonus;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Player.DailyBonus;
                public static toObject(message: POGOProtos.Data.Player.DailyBonus, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IEquippedBadge {
                badge_type?: (POGOProtos.Enums.BadgeType|null);
                level?: (number|null);
                next_equip_change_allowed_timestamp_ms?: (number|Long|null);
            }

            class EquippedBadge implements IEquippedBadge {
                constructor(properties?: POGOProtos.Data.Player.IEquippedBadge);
                public badge_type: POGOProtos.Enums.BadgeType;
                public level: number;
                public next_equip_change_allowed_timestamp_ms: (number|Long);
                public static create(properties?: POGOProtos.Data.Player.IEquippedBadge): POGOProtos.Data.Player.EquippedBadge;
                public static encode(message: POGOProtos.Data.Player.IEquippedBadge, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Data.Player.IEquippedBadge, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Player.EquippedBadge;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Player.EquippedBadge;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Player.EquippedBadge;
                public static toObject(message: POGOProtos.Data.Player.EquippedBadge, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IPlayerAvatar {
                skin?: (number|null);
                hair?: (number|null);
                shirt?: (number|null);
                pants?: (number|null);
                hat?: (number|null);
                shoes?: (number|null);
                avatar?: (number|null);
                eyes?: (number|null);
                backpack?: (number|null);
                avatar_hair?: (string|null);
                avatar_shirt?: (string|null);
                avatar_pants?: (string|null);
                avatar_hat?: (string|null);
                avatar_shoes?: (string|null);
                avatar_eyes?: (string|null);
                avatar_backpack?: (string|null);
                avatar_gloves?: (string|null);
                avatar_socks?: (string|null);
                avatar_belt?: (string|null);
                avatar_glasses?: (string|null);
                avatar_necklace?: (string|null);
            }

            class PlayerAvatar implements IPlayerAvatar {
                constructor(properties?: POGOProtos.Data.Player.IPlayerAvatar);
                public skin: number;
                public hair: number;
                public shirt: number;
                public pants: number;
                public hat: number;
                public shoes: number;
                public avatar: number;
                public eyes: number;
                public backpack: number;
                public avatar_hair: string;
                public avatar_shirt: string;
                public avatar_pants: string;
                public avatar_hat: string;
                public avatar_shoes: string;
                public avatar_eyes: string;
                public avatar_backpack: string;
                public avatar_gloves: string;
                public avatar_socks: string;
                public avatar_belt: string;
                public avatar_glasses: string;
                public avatar_necklace: string;
                public static create(properties?: POGOProtos.Data.Player.IPlayerAvatar): POGOProtos.Data.Player.PlayerAvatar;
                public static encode(message: POGOProtos.Data.Player.IPlayerAvatar, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Data.Player.IPlayerAvatar, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Player.PlayerAvatar;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Player.PlayerAvatar;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Player.PlayerAvatar;
                public static toObject(message: POGOProtos.Data.Player.PlayerAvatar, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            enum PlayerAvatarType {
                PLAYER_AVATAR_MALE = 0,
                PLAYER_AVATAR_FEMALE = 1
            }

            interface IPlayerCamera {
                is_default_camera?: (boolean|null);
            }

            class PlayerCamera implements IPlayerCamera {
                constructor(properties?: POGOProtos.Data.Player.IPlayerCamera);
                public is_default_camera: boolean;
                public static create(properties?: POGOProtos.Data.Player.IPlayerCamera): POGOProtos.Data.Player.PlayerCamera;
                public static encode(message: POGOProtos.Data.Player.IPlayerCamera, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Data.Player.IPlayerCamera, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Player.PlayerCamera;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Player.PlayerCamera;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Player.PlayerCamera;
                public static toObject(message: POGOProtos.Data.Player.PlayerCamera, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IPlayerCurrency {
                gems?: (number|null);
            }

            class PlayerCurrency implements IPlayerCurrency {
                constructor(properties?: POGOProtos.Data.Player.IPlayerCurrency);
                public gems: number;
                public static create(properties?: POGOProtos.Data.Player.IPlayerCurrency): POGOProtos.Data.Player.PlayerCurrency;
                public static encode(message: POGOProtos.Data.Player.IPlayerCurrency, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Data.Player.IPlayerCurrency, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Player.PlayerCurrency;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Player.PlayerCurrency;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Player.PlayerCurrency;
                public static toObject(message: POGOProtos.Data.Player.PlayerCurrency, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IPlayerPublicProfile {
                name?: (string|null);
                level?: (number|null);
                avatar?: (POGOProtos.Data.Player.IPlayerAvatar|null);
                team_color?: (POGOProtos.Enums.TeamColor|null);
                battles_won?: (number|null);
                km_walked?: (number|null);
                caught_pokemon?: (number|null);
                gym_badge_type?: (POGOProtos.Enums.GymBadgeType|null);
            }

            class PlayerPublicProfile implements IPlayerPublicProfile {
                constructor(properties?: POGOProtos.Data.Player.IPlayerPublicProfile);
                public name: string;
                public level: number;
                public avatar?: (POGOProtos.Data.Player.IPlayerAvatar|null);
                public team_color: POGOProtos.Enums.TeamColor;
                public battles_won: number;
                public km_walked: number;
                public caught_pokemon: number;
                public gym_badge_type: POGOProtos.Enums.GymBadgeType;
                public static create(properties?: POGOProtos.Data.Player.IPlayerPublicProfile): POGOProtos.Data.Player.PlayerPublicProfile;
                public static encode(message: POGOProtos.Data.Player.IPlayerPublicProfile, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Data.Player.IPlayerPublicProfile, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Player.PlayerPublicProfile;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Player.PlayerPublicProfile;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Player.PlayerPublicProfile;
                public static toObject(message: POGOProtos.Data.Player.PlayerPublicProfile, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IPlayerStats {
                level?: (number|null);
                experience?: (number|Long|null);
                prev_level_xp?: (number|Long|null);
                next_level_xp?: (number|Long|null);
                km_walked?: (number|null);
                pokemons_encountered?: (number|null);
                unique_pokedex_entries?: (number|null);
                pokemons_captured?: (number|null);
                evolutions?: (number|null);
                poke_stop_visits?: (number|null);
                pokeballs_thrown?: (number|null);
                eggs_hatched?: (number|null);
                big_magikarp_caught?: (number|null);
                battle_attack_won?: (number|null);
                battle_attack_total?: (number|null);
                battle_defended_won?: (number|null);
                battle_training_won?: (number|null);
                battle_training_total?: (number|null);
                prestige_raised_total?: (number|null);
                prestige_dropped_total?: (number|null);
                pokemon_deployed?: (number|null);
                pokemon_caught_by_type?: (number[]|null);
                small_rattata_caught?: (number|null);
                used_km_pool?: (number|null);
                last_km_refill_ms?: (number|Long|null);
                num_raid_battle_won?: (number|null);
                num_raid_battle_total?: (number|null);
                num_legendary_battle_won?: (number|null);
                num_legendary_battle_total?: (number|null);
                num_berries_fed?: (number|null);
                total_defended_ms?: (number|Long|null);
                event_badges?: (POGOProtos.Enums.GymBadgeType[]|null);
                km_walked_past_active_day?: (number|null);
                num_challenge_quests_completed?: (number|null);
            }

            class PlayerStats implements IPlayerStats {
                constructor(properties?: POGOProtos.Data.Player.IPlayerStats);
                public level: number;
                public experience: (number|Long);
                public prev_level_xp: (number|Long);
                public next_level_xp: (number|Long);
                public km_walked: number;
                public pokemons_encountered: number;
                public unique_pokedex_entries: number;
                public pokemons_captured: number;
                public evolutions: number;
                public poke_stop_visits: number;
                public pokeballs_thrown: number;
                public eggs_hatched: number;
                public big_magikarp_caught: number;
                public battle_attack_won: number;
                public battle_attack_total: number;
                public battle_defended_won: number;
                public battle_training_won: number;
                public battle_training_total: number;
                public prestige_raised_total: number;
                public prestige_dropped_total: number;
                public pokemon_deployed: number;
                public pokemon_caught_by_type: number[];
                public small_rattata_caught: number;
                public used_km_pool: number;
                public last_km_refill_ms: (number|Long);
                public num_raid_battle_won: number;
                public num_raid_battle_total: number;
                public num_legendary_battle_won: number;
                public num_legendary_battle_total: number;
                public num_berries_fed: number;
                public total_defended_ms: (number|Long);
                public event_badges: POGOProtos.Enums.GymBadgeType[];
                public km_walked_past_active_day: number;
                public num_challenge_quests_completed: number;
                public static create(properties?: POGOProtos.Data.Player.IPlayerStats): POGOProtos.Data.Player.PlayerStats;
                public static encode(message: POGOProtos.Data.Player.IPlayerStats, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Data.Player.IPlayerStats, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Player.PlayerStats;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Player.PlayerStats;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Player.PlayerStats;
                public static toObject(message: POGOProtos.Data.Player.PlayerStats, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }
        }

        interface IPlayerBadge {
            badge_type?: (POGOProtos.Enums.BadgeType|null);
            rank?: (number|null);
            start_value?: (number|null);
            end_value?: (number|null);
            current_value?: (number|null);
        }

        class PlayerBadge implements IPlayerBadge {
            constructor(properties?: POGOProtos.Data.IPlayerBadge);
            public badge_type: POGOProtos.Enums.BadgeType;
            public rank: number;
            public start_value: number;
            public end_value: number;
            public current_value: number;
            public static create(properties?: POGOProtos.Data.IPlayerBadge): POGOProtos.Data.PlayerBadge;
            public static encode(message: POGOProtos.Data.IPlayerBadge, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: POGOProtos.Data.IPlayerBadge, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.PlayerBadge;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.PlayerBadge;
            public static fromObject(object: { [k: string]: any }): POGOProtos.Data.PlayerBadge;
            public static toObject(message: POGOProtos.Data.PlayerBadge, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IPlayerData {
            creation_timestamp_ms?: (number|Long|null);
            username?: (string|null);
            team?: (POGOProtos.Enums.TeamColor|null);
            tutorial_state?: (POGOProtos.Enums.TutorialState[]|null);
            avatar?: (POGOProtos.Data.Player.IPlayerAvatar|null);
            max_pokemon_storage?: (number|null);
            max_item_storage?: (number|null);
            daily_bonus?: (POGOProtos.Data.Player.IDailyBonus|null);
            equipped_badge?: (POGOProtos.Data.Player.IEquippedBadge|null);
            contact_settings?: (POGOProtos.Data.Player.IContactSettings|null);
            currencies?: (POGOProtos.Data.Player.ICurrency[]|null);
            remaining_codename_claims?: (number|null);
            buddy_pokemon?: (POGOProtos.Data.IBuddyPokemon|null);
            battle_lockout_end_ms?: (number|Long|null);
            secondary_player_avatar?: (POGOProtos.Data.Player.IPlayerAvatar|null);
            name_is_blacklisted?: (boolean|null);
        }

        class PlayerData implements IPlayerData {
            constructor(properties?: POGOProtos.Data.IPlayerData);
            public creation_timestamp_ms: (number|Long);
            public username: string;
            public team: POGOProtos.Enums.TeamColor;
            public tutorial_state: POGOProtos.Enums.TutorialState[];
            public avatar?: (POGOProtos.Data.Player.IPlayerAvatar|null);
            public max_pokemon_storage: number;
            public max_item_storage: number;
            public daily_bonus?: (POGOProtos.Data.Player.IDailyBonus|null);
            public equipped_badge?: (POGOProtos.Data.Player.IEquippedBadge|null);
            public contact_settings?: (POGOProtos.Data.Player.IContactSettings|null);
            public currencies: POGOProtos.Data.Player.ICurrency[];
            public remaining_codename_claims: number;
            public buddy_pokemon?: (POGOProtos.Data.IBuddyPokemon|null);
            public battle_lockout_end_ms: (number|Long);
            public secondary_player_avatar?: (POGOProtos.Data.Player.IPlayerAvatar|null);
            public name_is_blacklisted: boolean;
            public static create(properties?: POGOProtos.Data.IPlayerData): POGOProtos.Data.PlayerData;
            public static encode(message: POGOProtos.Data.IPlayerData, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: POGOProtos.Data.IPlayerData, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.PlayerData;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.PlayerData;
            public static fromObject(object: { [k: string]: any }): POGOProtos.Data.PlayerData;
            public static toObject(message: POGOProtos.Data.PlayerData, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IPokedexEntry {
            pokemon_id?: (POGOProtos.Enums.PokemonId|null);
            times_encountered?: (number|null);
            times_captured?: (number|null);
            evolution_stone_pieces?: (number|null);
            evolution_stones?: (number|null);
            captured_costumes?: (POGOProtos.Enums.Costume[]|null);
            captured_forms?: (POGOProtos.Enums.Form[]|null);
            captured_genders?: (POGOProtos.Enums.Gender[]|null);
            captured_shiny?: (boolean|null);
            encountered_costumes?: (POGOProtos.Enums.Costume[]|null);
            encountered_forms?: (POGOProtos.Enums.Form[]|null);
            encountered_genders?: (POGOProtos.Enums.Gender[]|null);
            encountered_shiny?: (boolean|null);
        }

        class PokedexEntry implements IPokedexEntry {
            constructor(properties?: POGOProtos.Data.IPokedexEntry);
            public pokemon_id: POGOProtos.Enums.PokemonId;
            public times_encountered: number;
            public times_captured: number;
            public evolution_stone_pieces: number;
            public evolution_stones: number;
            public captured_costumes: POGOProtos.Enums.Costume[];
            public captured_forms: POGOProtos.Enums.Form[];
            public captured_genders: POGOProtos.Enums.Gender[];
            public captured_shiny: boolean;
            public encountered_costumes: POGOProtos.Enums.Costume[];
            public encountered_forms: POGOProtos.Enums.Form[];
            public encountered_genders: POGOProtos.Enums.Gender[];
            public encountered_shiny: boolean;
            public static create(properties?: POGOProtos.Data.IPokedexEntry): POGOProtos.Data.PokedexEntry;
            public static encode(message: POGOProtos.Data.IPokedexEntry, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: POGOProtos.Data.IPokedexEntry, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.PokedexEntry;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.PokedexEntry;
            public static fromObject(object: { [k: string]: any }): POGOProtos.Data.PokedexEntry;
            public static toObject(message: POGOProtos.Data.PokedexEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IPokemonData {
            id?: (number|Long|null);
            pokemon_id?: (POGOProtos.Enums.PokemonId|null);
            cp?: (number|null);
            stamina?: (number|null);
            stamina_max?: (number|null);
            move_1?: (POGOProtos.Enums.PokemonMove|null);
            move_2?: (POGOProtos.Enums.PokemonMove|null);
            deployed_fort_id?: (string|null);
            owner_name?: (string|null);
            is_egg?: (boolean|null);
            egg_km_walked_target?: (number|null);
            egg_km_walked_start?: (number|null);
            origin?: (number|null);
            height_m?: (number|null);
            weight_kg?: (number|null);
            individual_attack?: (number|null);
            individual_defense?: (number|null);
            individual_stamina?: (number|null);
            cp_multiplier?: (number|null);
            pokeball?: (POGOProtos.Inventory.Item.ItemId|null);
            captured_cell_id?: (number|Long|null);
            battles_attacked?: (number|null);
            battles_defended?: (number|null);
            egg_incubator_id?: (string|null);
            creation_time_ms?: (number|Long|null);
            num_upgrades?: (number|null);
            additional_cp_multiplier?: (number|null);
            favorite?: (number|null);
            nickname?: (string|null);
            from_fort?: (number|null);
            buddy_candy_awarded?: (number|null);
            buddy_total_km_walked?: (number|null);
            display_pokemon_id?: (number|null);
            display_cp?: (number|null);
            pokemon_display?: (POGOProtos.Data.IPokemonDisplay|null);
            is_bad?: (boolean|null);
            hatched_from_egg?: (boolean|null);
            coins_returned?: (number|null);
            deployed_duration_ms?: (number|Long|null);
            deployed_returned_timestamp_ms?: (number|Long|null);
        }

        class PokemonData implements IPokemonData {
            constructor(properties?: POGOProtos.Data.IPokemonData);
            public id: (number|Long);
            public pokemon_id: POGOProtos.Enums.PokemonId;
            public cp: number;
            public stamina: number;
            public stamina_max: number;
            public move_1: POGOProtos.Enums.PokemonMove;
            public move_2: POGOProtos.Enums.PokemonMove;
            public deployed_fort_id: string;
            public owner_name: string;
            public is_egg: boolean;
            public egg_km_walked_target: number;
            public egg_km_walked_start: number;
            public origin: number;
            public height_m: number;
            public weight_kg: number;
            public individual_attack: number;
            public individual_defense: number;
            public individual_stamina: number;
            public cp_multiplier: number;
            public pokeball: POGOProtos.Inventory.Item.ItemId;
            public captured_cell_id: (number|Long);
            public battles_attacked: number;
            public battles_defended: number;
            public egg_incubator_id: string;
            public creation_time_ms: (number|Long);
            public num_upgrades: number;
            public additional_cp_multiplier: number;
            public favorite: number;
            public nickname: string;
            public from_fort: number;
            public buddy_candy_awarded: number;
            public buddy_total_km_walked: number;
            public display_pokemon_id: number;
            public display_cp: number;
            public pokemon_display?: (POGOProtos.Data.IPokemonDisplay|null);
            public is_bad: boolean;
            public hatched_from_egg: boolean;
            public coins_returned: number;
            public deployed_duration_ms: (number|Long);
            public deployed_returned_timestamp_ms: (number|Long);
            public static create(properties?: POGOProtos.Data.IPokemonData): POGOProtos.Data.PokemonData;
            public static encode(message: POGOProtos.Data.IPokemonData, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: POGOProtos.Data.IPokemonData, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.PokemonData;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.PokemonData;
            public static fromObject(object: { [k: string]: any }): POGOProtos.Data.PokemonData;
            public static toObject(message: POGOProtos.Data.PokemonData, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IPokemonDisplay {
            costume?: (POGOProtos.Enums.Costume|null);
            gender?: (POGOProtos.Enums.Gender|null);
            shiny?: (boolean|null);
            form?: (POGOProtos.Enums.Form|null);
            weather_boosted_condition?: (POGOProtos.Enums.WeatherCondition|null);
        }

        class PokemonDisplay implements IPokemonDisplay {
            constructor(properties?: POGOProtos.Data.IPokemonDisplay);
            public costume: POGOProtos.Enums.Costume;
            public gender: POGOProtos.Enums.Gender;
            public shiny: boolean;
            public form: POGOProtos.Enums.Form;
            public weather_boosted_condition: POGOProtos.Enums.WeatherCondition;
            public static create(properties?: POGOProtos.Data.IPokemonDisplay): POGOProtos.Data.PokemonDisplay;
            public static encode(message: POGOProtos.Data.IPokemonDisplay, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: POGOProtos.Data.IPokemonDisplay, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.PokemonDisplay;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.PokemonDisplay;
            public static fromObject(object: { [k: string]: any }): POGOProtos.Data.PokemonDisplay;
            public static toObject(message: POGOProtos.Data.PokemonDisplay, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        namespace Quests {

            interface ICatchPokemonQuest {
            }

            class CatchPokemonQuest implements ICatchPokemonQuest {
                constructor(properties?: POGOProtos.Data.Quests.ICatchPokemonQuest);
                public static create(properties?: POGOProtos.Data.Quests.ICatchPokemonQuest): POGOProtos.Data.Quests.CatchPokemonQuest;
                public static encode(message: POGOProtos.Data.Quests.ICatchPokemonQuest, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Data.Quests.ICatchPokemonQuest, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Quests.CatchPokemonQuest;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Quests.CatchPokemonQuest;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Quests.CatchPokemonQuest;
                public static toObject(message: POGOProtos.Data.Quests.CatchPokemonQuest, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IClientQuest {
                quest?: (POGOProtos.Data.Quests.IQuest|null);
                quest_display?: (POGOProtos.Data.Quests.ClientQuest.IQuestDisplay|null);
            }

            class ClientQuest implements IClientQuest {
                constructor(properties?: POGOProtos.Data.Quests.IClientQuest);
                public quest?: (POGOProtos.Data.Quests.IQuest|null);
                public quest_display?: (POGOProtos.Data.Quests.ClientQuest.IQuestDisplay|null);
                public static create(properties?: POGOProtos.Data.Quests.IClientQuest): POGOProtos.Data.Quests.ClientQuest;
                public static encode(message: POGOProtos.Data.Quests.IClientQuest, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Data.Quests.IClientQuest, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Quests.ClientQuest;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Quests.ClientQuest;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Quests.ClientQuest;
                public static toObject(message: POGOProtos.Data.Quests.ClientQuest, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace ClientQuest {

                interface IQuestDisplay {
                    quest_id?: (string|null);
                    dialog?: (POGOProtos.Data.Quests.IQuestDialog[]|null);
                    description?: (string|null);
                    title?: (string|null);
                    slot?: (number|null);
                    subdisplay?: (POGOProtos.Data.Quests.ClientQuest.IQuestDisplay[]|null);
                    story_ending_quest?: (boolean|null);
                    story_ending_description?: (string|null);
                }

                class QuestDisplay implements IQuestDisplay {
                    constructor(properties?: POGOProtos.Data.Quests.ClientQuest.IQuestDisplay);
                    public quest_id: string;
                    public dialog: POGOProtos.Data.Quests.IQuestDialog[];
                    public description: string;
                    public title: string;
                    public slot: number;
                    public subdisplay: POGOProtos.Data.Quests.ClientQuest.IQuestDisplay[];
                    public story_ending_quest: boolean;
                    public story_ending_description: string;
                    public static create(properties?: POGOProtos.Data.Quests.ClientQuest.IQuestDisplay): POGOProtos.Data.Quests.ClientQuest.QuestDisplay;
                    public static encode(message: POGOProtos.Data.Quests.ClientQuest.IQuestDisplay, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Data.Quests.ClientQuest.IQuestDisplay, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Quests.ClientQuest.QuestDisplay;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Quests.ClientQuest.QuestDisplay;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Quests.ClientQuest.QuestDisplay;
                    public static toObject(message: POGOProtos.Data.Quests.ClientQuest.QuestDisplay, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }
            }

            interface IDailyQuest {
                current_period_bucket?: (number|null);
                current_streak_count?: (number|null);
            }

            class DailyQuest implements IDailyQuest {
                constructor(properties?: POGOProtos.Data.Quests.IDailyQuest);
                public current_period_bucket: number;
                public current_streak_count: number;
                public static create(properties?: POGOProtos.Data.Quests.IDailyQuest): POGOProtos.Data.Quests.DailyQuest;
                public static encode(message: POGOProtos.Data.Quests.IDailyQuest, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Data.Quests.IDailyQuest, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Quests.DailyQuest;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Quests.DailyQuest;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Quests.DailyQuest;
                public static toObject(message: POGOProtos.Data.Quests.DailyQuest, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IQuest {
                quest_type?: (POGOProtos.Enums.QuestType|null);
                daily_quest?: (POGOProtos.Data.Quests.IDailyQuest|null);
                multi_part?: (POGOProtos.Data.Quests.Quest.IMultiPartQuest|null);
                catch_pokemon?: (POGOProtos.Data.Quests.ICatchPokemonQuest|null);
                quest_id?: (string|null);
                quest_seed?: (number|Long|null);
                quest_context?: (POGOProtos.Data.Quests.Quest.Context|null);
                template_id?: (string|null);
                progress?: (number|null);
                goal?: (POGOProtos.Data.Quests.IQuestGoal|null);
                status?: (POGOProtos.Data.Quests.Quest.Status|null);
                quest_rewards?: (POGOProtos.Data.Quests.IQuestReward[]|null);
                creation_timestamp_ms?: (number|Long|null);
                last_update_timestamp_ms?: (number|Long|null);
                compeletion_timestamp_ms?: (number|Long|null);
                fort_id?: (string|null);
                admin_generated?: (boolean|null);
                stamp_count_override_enabled?: (boolean|null);
                stamp_count_override?: (number|null);
                s2_cell_id?: (number|Long|null);
            }

            class Quest implements IQuest {
                constructor(properties?: POGOProtos.Data.Quests.IQuest);
                public quest_type: POGOProtos.Enums.QuestType;
                public daily_quest?: (POGOProtos.Data.Quests.IDailyQuest|null);
                public multi_part?: (POGOProtos.Data.Quests.Quest.IMultiPartQuest|null);
                public catch_pokemon?: (POGOProtos.Data.Quests.ICatchPokemonQuest|null);
                public quest_id: string;
                public quest_seed: (number|Long);
                public quest_context: POGOProtos.Data.Quests.Quest.Context;
                public template_id: string;
                public progress: number;
                public goal?: (POGOProtos.Data.Quests.IQuestGoal|null);
                public status: POGOProtos.Data.Quests.Quest.Status;
                public quest_rewards: POGOProtos.Data.Quests.IQuestReward[];
                public creation_timestamp_ms: (number|Long);
                public last_update_timestamp_ms: (number|Long);
                public compeletion_timestamp_ms: (number|Long);
                public fort_id: string;
                public admin_generated: boolean;
                public stamp_count_override_enabled: boolean;
                public stamp_count_override: number;
                public s2_cell_id: (number|Long);
                public static create(properties?: POGOProtos.Data.Quests.IQuest): POGOProtos.Data.Quests.Quest;
                public static encode(message: POGOProtos.Data.Quests.IQuest, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Data.Quests.IQuest, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Quests.Quest;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Quests.Quest;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Quests.Quest;
                public static toObject(message: POGOProtos.Data.Quests.Quest, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace Quest {

                interface IMultiPartQuest {
                    sub_quests?: (POGOProtos.Data.Quests.IQuest[]|null);
                }

                class MultiPartQuest implements IMultiPartQuest {
                    constructor(properties?: POGOProtos.Data.Quests.Quest.IMultiPartQuest);
                    public sub_quests: POGOProtos.Data.Quests.IQuest[];
                    public static create(properties?: POGOProtos.Data.Quests.Quest.IMultiPartQuest): POGOProtos.Data.Quests.Quest.MultiPartQuest;
                    public static encode(message: POGOProtos.Data.Quests.Quest.IMultiPartQuest, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Data.Quests.Quest.IMultiPartQuest, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Quests.Quest.MultiPartQuest;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Quests.Quest.MultiPartQuest;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Quests.Quest.MultiPartQuest;
                    public static toObject(message: POGOProtos.Data.Quests.Quest.MultiPartQuest, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                enum Context {
                    UNSET = 0,
                    STORY_QUEST = 1,
                    CHALLENGE_QUEST = 2
                }

                enum Status {
                    STATUS_UNDEFINED = 0,
                    STATUS_ACTIVE = 1,
                    STATUS_COMPLETED = 2
                }
            }

            interface IQuestCondition {
                type?: (POGOProtos.Data.Quests.QuestCondition.ConditionType|null);
                with_pokemon_type?: (POGOProtos.Data.Quests.QuestCondition.IWithPokemonType|null);
                with_pokemon_category?: (POGOProtos.Data.Quests.QuestCondition.IWithPokemonCategory|null);
                with_weather_boost?: (POGOProtos.Data.Quests.QuestCondition.IWithWeatherBoost|null);
                with_daily_capture_bonus?: (POGOProtos.Data.Quests.QuestCondition.IWithDailyCaptureBonus|null);
                with_daily_spin_bonus?: (POGOProtos.Data.Quests.QuestCondition.IWithDailySpinBonus|null);
                with_win_raid_status?: (POGOProtos.Data.Quests.QuestCondition.IWithWinRaidStatus|null);
                with_raid_level?: (POGOProtos.Data.Quests.QuestCondition.IWithRaidLevel|null);
                with_throw_type?: (POGOProtos.Data.Quests.QuestCondition.IWithThrowType|null);
                with_win_gym_battle_status?: (POGOProtos.Data.Quests.QuestCondition.IWithWinGymBattleStatus|null);
                with_super_effective_charge_move?: (POGOProtos.Data.Quests.QuestCondition.IWithSuperEffectiveChargeMove|null);
                with_item?: (POGOProtos.Data.Quests.QuestCondition.IWithItem|null);
                with_unique_pokestop?: (POGOProtos.Data.Quests.QuestCondition.IWithUniquePokestop|null);
                with_quest_context?: (POGOProtos.Data.Quests.QuestCondition.IWithQuestContext|null);
                with_badge_type?: (POGOProtos.Data.Quests.QuestCondition.IWithBadgeType|null);
                with_player_level?: (POGOProtos.Data.Quests.QuestCondition.IWithPlayerLevel|null);
            }

            class QuestCondition implements IQuestCondition {
                constructor(properties?: POGOProtos.Data.Quests.IQuestCondition);
                public type: POGOProtos.Data.Quests.QuestCondition.ConditionType;
                public with_pokemon_type?: (POGOProtos.Data.Quests.QuestCondition.IWithPokemonType|null);
                public with_pokemon_category?: (POGOProtos.Data.Quests.QuestCondition.IWithPokemonCategory|null);
                public with_weather_boost?: (POGOProtos.Data.Quests.QuestCondition.IWithWeatherBoost|null);
                public with_daily_capture_bonus?: (POGOProtos.Data.Quests.QuestCondition.IWithDailyCaptureBonus|null);
                public with_daily_spin_bonus?: (POGOProtos.Data.Quests.QuestCondition.IWithDailySpinBonus|null);
                public with_win_raid_status?: (POGOProtos.Data.Quests.QuestCondition.IWithWinRaidStatus|null);
                public with_raid_level?: (POGOProtos.Data.Quests.QuestCondition.IWithRaidLevel|null);
                public with_throw_type?: (POGOProtos.Data.Quests.QuestCondition.IWithThrowType|null);
                public with_win_gym_battle_status?: (POGOProtos.Data.Quests.QuestCondition.IWithWinGymBattleStatus|null);
                public with_super_effective_charge_move?: (POGOProtos.Data.Quests.QuestCondition.IWithSuperEffectiveChargeMove|null);
                public with_item?: (POGOProtos.Data.Quests.QuestCondition.IWithItem|null);
                public with_unique_pokestop?: (POGOProtos.Data.Quests.QuestCondition.IWithUniquePokestop|null);
                public with_quest_context?: (POGOProtos.Data.Quests.QuestCondition.IWithQuestContext|null);
                public with_badge_type?: (POGOProtos.Data.Quests.QuestCondition.IWithBadgeType|null);
                public with_player_level?: (POGOProtos.Data.Quests.QuestCondition.IWithPlayerLevel|null);
                public static create(properties?: POGOProtos.Data.Quests.IQuestCondition): POGOProtos.Data.Quests.QuestCondition;
                public static encode(message: POGOProtos.Data.Quests.IQuestCondition, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Data.Quests.IQuestCondition, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Quests.QuestCondition;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Quests.QuestCondition;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Quests.QuestCondition;
                public static toObject(message: POGOProtos.Data.Quests.QuestCondition, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace QuestCondition {

                enum ConditionType {
                    UNSET = 0,
                    WITH_POKEMON_TYPE = 1,
                    WITH_POKEMON_CATEGORY = 2,
                    WITH_WEATHER_BOOST = 3,
                    WITH_DAILY_CAPTURE_BONUS = 4,
                    WITH_DAILY_SPIN_BONUS = 5,
                    WITH_WIN_RAID_STATUS = 6,
                    WITH_RAID_LEVEL = 7,
                    WITH_THROW_TYPE = 8,
                    WITH_WIN_GYM_BATTLE_STATUS = 9,
                    WITH_SUPER_EFFECTIVE_CHARGE = 10,
                    WITH_ITEM = 11,
                    WITH_UNIQUE_POKESTOP = 12,
                    WITH_QUEST_CONTEXT = 13,
                    WITH_THROW_TYPE_IN_A_ROW = 14,
                    WITH_CURVE_BALL = 15,
                    WITH_BADGE_TYPE = 16,
                    WITH_PLAYER_LEVEL = 17
                }

                interface IWithPokemonType {
                    pokemon_type?: (POGOProtos.Enums.PokemonType[]|null);
                }

                class WithPokemonType implements IWithPokemonType {
                    constructor(properties?: POGOProtos.Data.Quests.QuestCondition.IWithPokemonType);
                    public pokemon_type: POGOProtos.Enums.PokemonType[];
                    public static create(properties?: POGOProtos.Data.Quests.QuestCondition.IWithPokemonType): POGOProtos.Data.Quests.QuestCondition.WithPokemonType;
                    public static encode(message: POGOProtos.Data.Quests.QuestCondition.IWithPokemonType, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Data.Quests.QuestCondition.IWithPokemonType, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Quests.QuestCondition.WithPokemonType;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Quests.QuestCondition.WithPokemonType;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Quests.QuestCondition.WithPokemonType;
                    public static toObject(message: POGOProtos.Data.Quests.QuestCondition.WithPokemonType, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IWithWeatherBoost {
                }

                class WithWeatherBoost implements IWithWeatherBoost {
                    constructor(properties?: POGOProtos.Data.Quests.QuestCondition.IWithWeatherBoost);
                    public static create(properties?: POGOProtos.Data.Quests.QuestCondition.IWithWeatherBoost): POGOProtos.Data.Quests.QuestCondition.WithWeatherBoost;
                    public static encode(message: POGOProtos.Data.Quests.QuestCondition.IWithWeatherBoost, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Data.Quests.QuestCondition.IWithWeatherBoost, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Quests.QuestCondition.WithWeatherBoost;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Quests.QuestCondition.WithWeatherBoost;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Quests.QuestCondition.WithWeatherBoost;
                    public static toObject(message: POGOProtos.Data.Quests.QuestCondition.WithWeatherBoost, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IWithPokemonCategory {
                    category_name?: (string|null);
                    pokemon_ids?: (POGOProtos.Enums.PokemonId[]|null);
                }

                class WithPokemonCategory implements IWithPokemonCategory {
                    constructor(properties?: POGOProtos.Data.Quests.QuestCondition.IWithPokemonCategory);
                    public category_name: string;
                    public pokemon_ids: POGOProtos.Enums.PokemonId[];
                    public static create(properties?: POGOProtos.Data.Quests.QuestCondition.IWithPokemonCategory): POGOProtos.Data.Quests.QuestCondition.WithPokemonCategory;
                    public static encode(message: POGOProtos.Data.Quests.QuestCondition.IWithPokemonCategory, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Data.Quests.QuestCondition.IWithPokemonCategory, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Quests.QuestCondition.WithPokemonCategory;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Quests.QuestCondition.WithPokemonCategory;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Quests.QuestCondition.WithPokemonCategory;
                    public static toObject(message: POGOProtos.Data.Quests.QuestCondition.WithPokemonCategory, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IWithDailyCaptureBonus {
                }

                class WithDailyCaptureBonus implements IWithDailyCaptureBonus {
                    constructor(properties?: POGOProtos.Data.Quests.QuestCondition.IWithDailyCaptureBonus);
                    public static create(properties?: POGOProtos.Data.Quests.QuestCondition.IWithDailyCaptureBonus): POGOProtos.Data.Quests.QuestCondition.WithDailyCaptureBonus;
                    public static encode(message: POGOProtos.Data.Quests.QuestCondition.IWithDailyCaptureBonus, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Data.Quests.QuestCondition.IWithDailyCaptureBonus, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Quests.QuestCondition.WithDailyCaptureBonus;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Quests.QuestCondition.WithDailyCaptureBonus;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Quests.QuestCondition.WithDailyCaptureBonus;
                    public static toObject(message: POGOProtos.Data.Quests.QuestCondition.WithDailyCaptureBonus, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IWithDailySpinBonus {
                }

                class WithDailySpinBonus implements IWithDailySpinBonus {
                    constructor(properties?: POGOProtos.Data.Quests.QuestCondition.IWithDailySpinBonus);
                    public static create(properties?: POGOProtos.Data.Quests.QuestCondition.IWithDailySpinBonus): POGOProtos.Data.Quests.QuestCondition.WithDailySpinBonus;
                    public static encode(message: POGOProtos.Data.Quests.QuestCondition.IWithDailySpinBonus, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Data.Quests.QuestCondition.IWithDailySpinBonus, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Quests.QuestCondition.WithDailySpinBonus;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Quests.QuestCondition.WithDailySpinBonus;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Quests.QuestCondition.WithDailySpinBonus;
                    public static toObject(message: POGOProtos.Data.Quests.QuestCondition.WithDailySpinBonus, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IWithWinRaidStatus {
                }

                class WithWinRaidStatus implements IWithWinRaidStatus {
                    constructor(properties?: POGOProtos.Data.Quests.QuestCondition.IWithWinRaidStatus);
                    public static create(properties?: POGOProtos.Data.Quests.QuestCondition.IWithWinRaidStatus): POGOProtos.Data.Quests.QuestCondition.WithWinRaidStatus;
                    public static encode(message: POGOProtos.Data.Quests.QuestCondition.IWithWinRaidStatus, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Data.Quests.QuestCondition.IWithWinRaidStatus, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Quests.QuestCondition.WithWinRaidStatus;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Quests.QuestCondition.WithWinRaidStatus;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Quests.QuestCondition.WithWinRaidStatus;
                    public static toObject(message: POGOProtos.Data.Quests.QuestCondition.WithWinRaidStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IWithRaidLevel {
                    raid_level?: (POGOProtos.Enums.RaidLevel[]|null);
                }

                class WithRaidLevel implements IWithRaidLevel {
                    constructor(properties?: POGOProtos.Data.Quests.QuestCondition.IWithRaidLevel);
                    public raid_level: POGOProtos.Enums.RaidLevel[];
                    public static create(properties?: POGOProtos.Data.Quests.QuestCondition.IWithRaidLevel): POGOProtos.Data.Quests.QuestCondition.WithRaidLevel;
                    public static encode(message: POGOProtos.Data.Quests.QuestCondition.IWithRaidLevel, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Data.Quests.QuestCondition.IWithRaidLevel, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Quests.QuestCondition.WithRaidLevel;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Quests.QuestCondition.WithRaidLevel;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Quests.QuestCondition.WithRaidLevel;
                    public static toObject(message: POGOProtos.Data.Quests.QuestCondition.WithRaidLevel, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IWithThrowType {
                    throw_type?: (POGOProtos.Enums.ActivityType|null);
                    hit?: (boolean|null);
                }

                class WithThrowType implements IWithThrowType {
                    constructor(properties?: POGOProtos.Data.Quests.QuestCondition.IWithThrowType);
                    public throw_type: POGOProtos.Enums.ActivityType;
                    public hit: boolean;
                    public static create(properties?: POGOProtos.Data.Quests.QuestCondition.IWithThrowType): POGOProtos.Data.Quests.QuestCondition.WithThrowType;
                    public static encode(message: POGOProtos.Data.Quests.QuestCondition.IWithThrowType, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Data.Quests.QuestCondition.IWithThrowType, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Quests.QuestCondition.WithThrowType;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Quests.QuestCondition.WithThrowType;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Quests.QuestCondition.WithThrowType;
                    public static toObject(message: POGOProtos.Data.Quests.QuestCondition.WithThrowType, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IWithCurveBall {
                }

                class WithCurveBall implements IWithCurveBall {
                    constructor(properties?: POGOProtos.Data.Quests.QuestCondition.IWithCurveBall);
                    public static create(properties?: POGOProtos.Data.Quests.QuestCondition.IWithCurveBall): POGOProtos.Data.Quests.QuestCondition.WithCurveBall;
                    public static encode(message: POGOProtos.Data.Quests.QuestCondition.IWithCurveBall, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Data.Quests.QuestCondition.IWithCurveBall, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Quests.QuestCondition.WithCurveBall;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Quests.QuestCondition.WithCurveBall;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Quests.QuestCondition.WithCurveBall;
                    public static toObject(message: POGOProtos.Data.Quests.QuestCondition.WithCurveBall, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IWithWinGymBattleStatus {
                }

                class WithWinGymBattleStatus implements IWithWinGymBattleStatus {
                    constructor(properties?: POGOProtos.Data.Quests.QuestCondition.IWithWinGymBattleStatus);
                    public static create(properties?: POGOProtos.Data.Quests.QuestCondition.IWithWinGymBattleStatus): POGOProtos.Data.Quests.QuestCondition.WithWinGymBattleStatus;
                    public static encode(message: POGOProtos.Data.Quests.QuestCondition.IWithWinGymBattleStatus, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Data.Quests.QuestCondition.IWithWinGymBattleStatus, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Quests.QuestCondition.WithWinGymBattleStatus;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Quests.QuestCondition.WithWinGymBattleStatus;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Quests.QuestCondition.WithWinGymBattleStatus;
                    public static toObject(message: POGOProtos.Data.Quests.QuestCondition.WithWinGymBattleStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IWithSuperEffectiveChargeMove {
                }

                class WithSuperEffectiveChargeMove implements IWithSuperEffectiveChargeMove {
                    constructor(properties?: POGOProtos.Data.Quests.QuestCondition.IWithSuperEffectiveChargeMove);
                    public static create(properties?: POGOProtos.Data.Quests.QuestCondition.IWithSuperEffectiveChargeMove): POGOProtos.Data.Quests.QuestCondition.WithSuperEffectiveChargeMove;
                    public static encode(message: POGOProtos.Data.Quests.QuestCondition.IWithSuperEffectiveChargeMove, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Data.Quests.QuestCondition.IWithSuperEffectiveChargeMove, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Quests.QuestCondition.WithSuperEffectiveChargeMove;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Quests.QuestCondition.WithSuperEffectiveChargeMove;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Quests.QuestCondition.WithSuperEffectiveChargeMove;
                    public static toObject(message: POGOProtos.Data.Quests.QuestCondition.WithSuperEffectiveChargeMove, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IWithItem {
                    item?: (POGOProtos.Inventory.Item.ItemId|null);
                }

                class WithItem implements IWithItem {
                    constructor(properties?: POGOProtos.Data.Quests.QuestCondition.IWithItem);
                    public item: POGOProtos.Inventory.Item.ItemId;
                    public static create(properties?: POGOProtos.Data.Quests.QuestCondition.IWithItem): POGOProtos.Data.Quests.QuestCondition.WithItem;
                    public static encode(message: POGOProtos.Data.Quests.QuestCondition.IWithItem, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Data.Quests.QuestCondition.IWithItem, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Quests.QuestCondition.WithItem;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Quests.QuestCondition.WithItem;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Quests.QuestCondition.WithItem;
                    public static toObject(message: POGOProtos.Data.Quests.QuestCondition.WithItem, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IWithUniquePokestop {
                }

                class WithUniquePokestop implements IWithUniquePokestop {
                    constructor(properties?: POGOProtos.Data.Quests.QuestCondition.IWithUniquePokestop);
                    public static create(properties?: POGOProtos.Data.Quests.QuestCondition.IWithUniquePokestop): POGOProtos.Data.Quests.QuestCondition.WithUniquePokestop;
                    public static encode(message: POGOProtos.Data.Quests.QuestCondition.IWithUniquePokestop, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Data.Quests.QuestCondition.IWithUniquePokestop, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Quests.QuestCondition.WithUniquePokestop;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Quests.QuestCondition.WithUniquePokestop;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Quests.QuestCondition.WithUniquePokestop;
                    public static toObject(message: POGOProtos.Data.Quests.QuestCondition.WithUniquePokestop, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IWithQuestContext {
                    context?: (POGOProtos.Data.Quests.QuestCondition.WithQuestContext.Context|null);
                }

                class WithQuestContext implements IWithQuestContext {
                    constructor(properties?: POGOProtos.Data.Quests.QuestCondition.IWithQuestContext);
                    public context: POGOProtos.Data.Quests.QuestCondition.WithQuestContext.Context;
                    public static create(properties?: POGOProtos.Data.Quests.QuestCondition.IWithQuestContext): POGOProtos.Data.Quests.QuestCondition.WithQuestContext;
                    public static encode(message: POGOProtos.Data.Quests.QuestCondition.IWithQuestContext, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Data.Quests.QuestCondition.IWithQuestContext, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Quests.QuestCondition.WithQuestContext;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Quests.QuestCondition.WithQuestContext;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Quests.QuestCondition.WithQuestContext;
                    public static toObject(message: POGOProtos.Data.Quests.QuestCondition.WithQuestContext, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                namespace WithQuestContext {

                    enum Context {
                        UNSET = 0,
                        STORY_QUEST = 1,
                        CHALLENGE_QUEST = 2
                    }
                }

                interface IWithBadgeType {
                    badge_type?: (POGOProtos.Enums.BadgeType[]|null);
                    badge_rank?: (number|null);
                    amount?: (number|null);
                }

                class WithBadgeType implements IWithBadgeType {
                    constructor(properties?: POGOProtos.Data.Quests.QuestCondition.IWithBadgeType);
                    public badge_type: POGOProtos.Enums.BadgeType[];
                    public badge_rank: number;
                    public amount: number;
                    public static create(properties?: POGOProtos.Data.Quests.QuestCondition.IWithBadgeType): POGOProtos.Data.Quests.QuestCondition.WithBadgeType;
                    public static encode(message: POGOProtos.Data.Quests.QuestCondition.IWithBadgeType, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Data.Quests.QuestCondition.IWithBadgeType, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Quests.QuestCondition.WithBadgeType;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Quests.QuestCondition.WithBadgeType;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Quests.QuestCondition.WithBadgeType;
                    public static toObject(message: POGOProtos.Data.Quests.QuestCondition.WithBadgeType, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IWithPlayerLevel {
                    level?: (number|null);
                }

                class WithPlayerLevel implements IWithPlayerLevel {
                    constructor(properties?: POGOProtos.Data.Quests.QuestCondition.IWithPlayerLevel);
                    public level: number;
                    public static create(properties?: POGOProtos.Data.Quests.QuestCondition.IWithPlayerLevel): POGOProtos.Data.Quests.QuestCondition.WithPlayerLevel;
                    public static encode(message: POGOProtos.Data.Quests.QuestCondition.IWithPlayerLevel, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Data.Quests.QuestCondition.IWithPlayerLevel, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Quests.QuestCondition.WithPlayerLevel;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Quests.QuestCondition.WithPlayerLevel;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Quests.QuestCondition.WithPlayerLevel;
                    public static toObject(message: POGOProtos.Data.Quests.QuestCondition.WithPlayerLevel, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }
            }

            interface IQuestDialog {
                text?: (string|null);
                expression?: (POGOProtos.Data.Quests.QuestDialog.CharacterExpression|null);
                image_uri?: (string|null);
                character?: (POGOProtos.Data.Quests.QuestDialog.Character|null);
            }

            class QuestDialog implements IQuestDialog {
                constructor(properties?: POGOProtos.Data.Quests.IQuestDialog);
                public text: string;
                public expression: POGOProtos.Data.Quests.QuestDialog.CharacterExpression;
                public image_uri: string;
                public character: POGOProtos.Data.Quests.QuestDialog.Character;
                public static create(properties?: POGOProtos.Data.Quests.IQuestDialog): POGOProtos.Data.Quests.QuestDialog;
                public static encode(message: POGOProtos.Data.Quests.IQuestDialog, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Data.Quests.IQuestDialog, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Quests.QuestDialog;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Quests.QuestDialog;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Quests.QuestDialog;
                public static toObject(message: POGOProtos.Data.Quests.QuestDialog, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace QuestDialog {

                enum CharacterExpression {
                    EXPRESSION_UNSET = 0,
                    HAPPY = 1,
                    SYMPATHETIC = 2,
                    ENERGETIC = 3,
                    PUSHY = 4,
                    IMPATIENT = 5,
                    ADMIRATION = 6
                }

                enum Character {
                    CHARACTER_UNSET = 0,
                    PROFESSOR_WILLOW = 1
                }
            }

            interface IQuestDisplay {
                quest_id?: (string|null);
                dialog?: (POGOProtos.Data.Quests.IQuestDialog[]|null);
                description?: (string|null);
                title?: (string|null);
                slot?: (number|null);
                subdisplay?: (POGOProtos.Data.Quests.QuestDisplay.ISubQuestDisplay[]|null);
                story_ending_quest?: (boolean|null);
                story_ending_description?: (string|null);
            }

            class QuestDisplay implements IQuestDisplay {
                constructor(properties?: POGOProtos.Data.Quests.IQuestDisplay);
                public quest_id: string;
                public dialog: POGOProtos.Data.Quests.IQuestDialog[];
                public description: string;
                public title: string;
                public slot: number;
                public subdisplay: POGOProtos.Data.Quests.QuestDisplay.ISubQuestDisplay[];
                public story_ending_quest: boolean;
                public story_ending_description: string;
                public static create(properties?: POGOProtos.Data.Quests.IQuestDisplay): POGOProtos.Data.Quests.QuestDisplay;
                public static encode(message: POGOProtos.Data.Quests.IQuestDisplay, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Data.Quests.IQuestDisplay, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Quests.QuestDisplay;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Quests.QuestDisplay;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Quests.QuestDisplay;
                public static toObject(message: POGOProtos.Data.Quests.QuestDisplay, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace QuestDisplay {

                interface ISubQuestDisplay {
                    subquest_displays?: (POGOProtos.Data.Quests.IQuestDisplay[]|null);
                }

                class SubQuestDisplay implements ISubQuestDisplay {
                    constructor(properties?: POGOProtos.Data.Quests.QuestDisplay.ISubQuestDisplay);
                    public subquest_displays: POGOProtos.Data.Quests.IQuestDisplay[];
                    public static create(properties?: POGOProtos.Data.Quests.QuestDisplay.ISubQuestDisplay): POGOProtos.Data.Quests.QuestDisplay.SubQuestDisplay;
                    public static encode(message: POGOProtos.Data.Quests.QuestDisplay.ISubQuestDisplay, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Data.Quests.QuestDisplay.ISubQuestDisplay, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Quests.QuestDisplay.SubQuestDisplay;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Quests.QuestDisplay.SubQuestDisplay;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Quests.QuestDisplay.SubQuestDisplay;
                    public static toObject(message: POGOProtos.Data.Quests.QuestDisplay.SubQuestDisplay, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }
            }

            interface IQuestGoal {
                condition?: (POGOProtos.Data.Quests.IQuestCondition[]|null);
                target?: (number|null);
            }

            class QuestGoal implements IQuestGoal {
                constructor(properties?: POGOProtos.Data.Quests.IQuestGoal);
                public condition: POGOProtos.Data.Quests.IQuestCondition[];
                public target: number;
                public static create(properties?: POGOProtos.Data.Quests.IQuestGoal): POGOProtos.Data.Quests.QuestGoal;
                public static encode(message: POGOProtos.Data.Quests.IQuestGoal, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Data.Quests.IQuestGoal, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Quests.QuestGoal;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Quests.QuestGoal;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Quests.QuestGoal;
                public static toObject(message: POGOProtos.Data.Quests.QuestGoal, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IQuestPokemonEncounter {
                quest_id?: (string|null);
                pokemon?: (POGOProtos.Enums.PokemonId|null);
                encounter_type?: (POGOProtos.Enums.EncounterType|null);
            }

            class QuestPokemonEncounter implements IQuestPokemonEncounter {
                constructor(properties?: POGOProtos.Data.Quests.IQuestPokemonEncounter);
                public quest_id: string;
                public pokemon: POGOProtos.Enums.PokemonId;
                public encounter_type: POGOProtos.Enums.EncounterType;
                public static create(properties?: POGOProtos.Data.Quests.IQuestPokemonEncounter): POGOProtos.Data.Quests.QuestPokemonEncounter;
                public static encode(message: POGOProtos.Data.Quests.IQuestPokemonEncounter, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Data.Quests.IQuestPokemonEncounter, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Quests.QuestPokemonEncounter;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Quests.QuestPokemonEncounter;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Quests.QuestPokemonEncounter;
                public static toObject(message: POGOProtos.Data.Quests.QuestPokemonEncounter, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IQuestReward {
                type?: (POGOProtos.Data.Quests.QuestReward.Type|null);
                exp?: (number|null);
                item?: (POGOProtos.Data.Quests.QuestReward.IItemReward|null);
                stardust?: (number|null);
                candy?: (POGOProtos.Data.Quests.QuestReward.IPokemonCandyReward|null);
                avatar_template_id?: (string|null);
                quest_template_id?: (string|null);
                pokemon_encounter?: (POGOProtos.Data.Quests.QuestReward.IPokemonEncounterReward|null);
            }

            class QuestReward implements IQuestReward {
                constructor(properties?: POGOProtos.Data.Quests.IQuestReward);
                public type: POGOProtos.Data.Quests.QuestReward.Type;
                public exp: number;
                public item?: (POGOProtos.Data.Quests.QuestReward.IItemReward|null);
                public stardust: number;
                public candy?: (POGOProtos.Data.Quests.QuestReward.IPokemonCandyReward|null);
                public avatar_template_id: string;
                public quest_template_id: string;
                public pokemon_encounter?: (POGOProtos.Data.Quests.QuestReward.IPokemonEncounterReward|null);
                public static create(properties?: POGOProtos.Data.Quests.IQuestReward): POGOProtos.Data.Quests.QuestReward;
                public static encode(message: POGOProtos.Data.Quests.IQuestReward, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Data.Quests.IQuestReward, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Quests.QuestReward;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Quests.QuestReward;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Quests.QuestReward;
                public static toObject(message: POGOProtos.Data.Quests.QuestReward, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace QuestReward {

                enum Type {
                    UNSET = 0,
                    EXPERIENCE = 1,
                    ITEM = 2,
                    STARDUST = 3,
                    CANDY = 4,
                    AVATAR_CLOTHING = 5,
                    QUEST = 6,
                    POKEMON_ENCOUNTER = 7
                }

                interface IItemReward {
                    item?: (POGOProtos.Inventory.Item.ItemId|null);
                    amount?: (number|null);
                }

                class ItemReward implements IItemReward {
                    constructor(properties?: POGOProtos.Data.Quests.QuestReward.IItemReward);
                    public item: POGOProtos.Inventory.Item.ItemId;
                    public amount: number;
                    public static create(properties?: POGOProtos.Data.Quests.QuestReward.IItemReward): POGOProtos.Data.Quests.QuestReward.ItemReward;
                    public static encode(message: POGOProtos.Data.Quests.QuestReward.IItemReward, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Data.Quests.QuestReward.IItemReward, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Quests.QuestReward.ItemReward;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Quests.QuestReward.ItemReward;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Quests.QuestReward.ItemReward;
                    public static toObject(message: POGOProtos.Data.Quests.QuestReward.ItemReward, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IPokemonCandyReward {
                    pokemon_id?: (POGOProtos.Enums.PokemonId|null);
                    amount?: (number|null);
                }

                class PokemonCandyReward implements IPokemonCandyReward {
                    constructor(properties?: POGOProtos.Data.Quests.QuestReward.IPokemonCandyReward);
                    public pokemon_id: POGOProtos.Enums.PokemonId;
                    public amount: number;
                    public static create(properties?: POGOProtos.Data.Quests.QuestReward.IPokemonCandyReward): POGOProtos.Data.Quests.QuestReward.PokemonCandyReward;
                    public static encode(message: POGOProtos.Data.Quests.QuestReward.IPokemonCandyReward, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Data.Quests.QuestReward.IPokemonCandyReward, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Quests.QuestReward.PokemonCandyReward;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Quests.QuestReward.PokemonCandyReward;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Quests.QuestReward.PokemonCandyReward;
                    public static toObject(message: POGOProtos.Data.Quests.QuestReward.PokemonCandyReward, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IPokemonEncounterReward {
                    pokemon_id?: (POGOProtos.Enums.PokemonId|null);
                    use_quest_pokemon_encounter_distribuition?: (boolean|null);
                    pokemon_display?: (POGOProtos.Data.IPokemonDisplay|null);
                }

                class PokemonEncounterReward implements IPokemonEncounterReward {
                    constructor(properties?: POGOProtos.Data.Quests.QuestReward.IPokemonEncounterReward);
                    public pokemon_id: POGOProtos.Enums.PokemonId;
                    public use_quest_pokemon_encounter_distribuition: boolean;
                    public pokemon_display?: (POGOProtos.Data.IPokemonDisplay|null);
                    public static create(properties?: POGOProtos.Data.Quests.QuestReward.IPokemonEncounterReward): POGOProtos.Data.Quests.QuestReward.PokemonEncounterReward;
                    public static encode(message: POGOProtos.Data.Quests.QuestReward.IPokemonEncounterReward, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Data.Quests.QuestReward.IPokemonEncounterReward, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Quests.QuestReward.PokemonEncounterReward;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Quests.QuestReward.PokemonEncounterReward;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Quests.QuestReward.PokemonEncounterReward;
                    public static toObject(message: POGOProtos.Data.Quests.QuestReward.PokemonEncounterReward, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }
            }

            interface IQuests {
                quest?: (POGOProtos.Data.Quests.IQuest[]|null);
                completed_story_quest?: (string[]|null);
                quest_pokemon_encounter?: (POGOProtos.Data.Quests.IQuestPokemonEncounter[]|null);
                stamp_card?: (POGOProtos.Data.Quests.IQuestStampCard|null);
            }

            class Quests implements IQuests {
                constructor(properties?: POGOProtos.Data.Quests.IQuests);
                public quest: POGOProtos.Data.Quests.IQuest[];
                public completed_story_quest: string[];
                public quest_pokemon_encounter: POGOProtos.Data.Quests.IQuestPokemonEncounter[];
                public stamp_card?: (POGOProtos.Data.Quests.IQuestStampCard|null);
                public static create(properties?: POGOProtos.Data.Quests.IQuests): POGOProtos.Data.Quests.Quests;
                public static encode(message: POGOProtos.Data.Quests.IQuests, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Data.Quests.IQuests, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Quests.Quests;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Quests.Quests;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Quests.Quests;
                public static toObject(message: POGOProtos.Data.Quests.Quests, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IQuestStamp {
                context?: (POGOProtos.Data.Quests.QuestStamp.Context|null);
                timestamp_ms?: (number|Long|null);
            }

            class QuestStamp implements IQuestStamp {
                constructor(properties?: POGOProtos.Data.Quests.IQuestStamp);
                public context: POGOProtos.Data.Quests.QuestStamp.Context;
                public timestamp_ms: (number|Long);
                public static create(properties?: POGOProtos.Data.Quests.IQuestStamp): POGOProtos.Data.Quests.QuestStamp;
                public static encode(message: POGOProtos.Data.Quests.IQuestStamp, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Data.Quests.IQuestStamp, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Quests.QuestStamp;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Quests.QuestStamp;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Quests.QuestStamp;
                public static toObject(message: POGOProtos.Data.Quests.QuestStamp, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace QuestStamp {

                enum Context {
                    UNSET = 0,
                    STORY_QUEST = 1,
                    CHALLENGE_QUEST = 2
                }
            }

            interface IQuestStampCard {
                stamp?: (POGOProtos.Data.Quests.IQuestStamp[]|null);
                target?: (number|null);
                remaining_daily_stamps?: (number|null);
                id?: (string|null);
            }

            class QuestStampCard implements IQuestStampCard {
                constructor(properties?: POGOProtos.Data.Quests.IQuestStampCard);
                public stamp: POGOProtos.Data.Quests.IQuestStamp[];
                public target: number;
                public remaining_daily_stamps: number;
                public id: string;
                public static create(properties?: POGOProtos.Data.Quests.IQuestStampCard): POGOProtos.Data.Quests.QuestStampCard;
                public static encode(message: POGOProtos.Data.Quests.IQuestStampCard, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Data.Quests.IQuestStampCard, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Quests.QuestStampCard;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Quests.QuestStampCard;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Quests.QuestStampCard;
                public static toObject(message: POGOProtos.Data.Quests.QuestStampCard, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }
        }

        namespace Raid {

            interface IEventInfo {
                image_url?: (string|null);
                icon_url?: (string|null);
                name_key?: (string|null);
            }

            class EventInfo implements IEventInfo {
                constructor(properties?: POGOProtos.Data.Raid.IEventInfo);
                public image_url: string;
                public icon_url: string;
                public name_key: string;
                public static create(properties?: POGOProtos.Data.Raid.IEventInfo): POGOProtos.Data.Raid.EventInfo;
                public static encode(message: POGOProtos.Data.Raid.IEventInfo, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Data.Raid.IEventInfo, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Raid.EventInfo;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Raid.EventInfo;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Raid.EventInfo;
                public static toObject(message: POGOProtos.Data.Raid.EventInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface ILobby {
                lobby_id?: (number[]|null);
                players?: (POGOProtos.Data.Battle.IBattleParticipant[]|null);
                player_join_end_ms?: (number|Long|null);
                pokemon_selection_end_ms?: (number|Long|null);
                raid_battle_start_ms?: (number|Long|null);
                raid_battle_end_ms?: (number|Long|null);
                raid_battle_id?: (string|null);
                owner_nickname?: (string|null);
                "private"?: (boolean|null);
                creation_ms?: (number|Long|null);
                battle_plfe_instance?: (number|null);
                weather_condition?: (POGOProtos.Enums.WeatherCondition|null);
            }

            class Lobby implements ILobby {
                constructor(properties?: POGOProtos.Data.Raid.ILobby);
                public lobby_id: number[];
                public players: POGOProtos.Data.Battle.IBattleParticipant[];
                public player_join_end_ms: (number|Long);
                public pokemon_selection_end_ms: (number|Long);
                public raid_battle_start_ms: (number|Long);
                public raid_battle_end_ms: (number|Long);
                public raid_battle_id: string;
                public owner_nickname: string;
                public private: boolean;
                public creation_ms: (number|Long);
                public battle_plfe_instance: number;
                public weather_condition: POGOProtos.Enums.WeatherCondition;
                public static create(properties?: POGOProtos.Data.Raid.ILobby): POGOProtos.Data.Raid.Lobby;
                public static encode(message: POGOProtos.Data.Raid.ILobby, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Data.Raid.ILobby, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Raid.Lobby;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Raid.Lobby;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Raid.Lobby;
                public static toObject(message: POGOProtos.Data.Raid.Lobby, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IParticipation {
                individual_damage_pokeballs?: (number|null);
                team_damage_pokeballs?: (number|null);
                gym_ownership_pokeballs?: (number|null);
                base_pokeballs?: (number|null);
                blue_percentage?: (number|null);
                red_percentage?: (number|null);
                yellow_percentage?: (number|null);
                bonus_item_multiplier?: (number|null);
            }

            class Participation implements IParticipation {
                constructor(properties?: POGOProtos.Data.Raid.IParticipation);
                public individual_damage_pokeballs: number;
                public team_damage_pokeballs: number;
                public gym_ownership_pokeballs: number;
                public base_pokeballs: number;
                public blue_percentage: number;
                public red_percentage: number;
                public yellow_percentage: number;
                public bonus_item_multiplier: number;
                public static create(properties?: POGOProtos.Data.Raid.IParticipation): POGOProtos.Data.Raid.Participation;
                public static encode(message: POGOProtos.Data.Raid.IParticipation, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Data.Raid.IParticipation, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Raid.Participation;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Raid.Participation;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Raid.Participation;
                public static toObject(message: POGOProtos.Data.Raid.Participation, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IPlayerRaidInfo {
                total_completed_raids?: (number|null);
                total_completed_legendary_raids?: (number|null);
                raids?: (POGOProtos.Data.Raid.IRaid[]|null);
            }

            class PlayerRaidInfo implements IPlayerRaidInfo {
                constructor(properties?: POGOProtos.Data.Raid.IPlayerRaidInfo);
                public total_completed_raids: number;
                public total_completed_legendary_raids: number;
                public raids: POGOProtos.Data.Raid.IRaid[];
                public static create(properties?: POGOProtos.Data.Raid.IPlayerRaidInfo): POGOProtos.Data.Raid.PlayerRaidInfo;
                public static encode(message: POGOProtos.Data.Raid.IPlayerRaidInfo, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Data.Raid.IPlayerRaidInfo, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Raid.PlayerRaidInfo;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Raid.PlayerRaidInfo;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Raid.PlayerRaidInfo;
                public static toObject(message: POGOProtos.Data.Raid.PlayerRaidInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IRaid {
                raid_seed?: (number|Long|null);
                started_ms?: (number|Long|null);
                completed_ms?: (number|Long|null);
                encounter_pokemon_id?: (POGOProtos.Enums.PokemonId|null);
                completed_battle?: (boolean|null);
                received_rewards?: (boolean|null);
                finished_encounter?: (boolean|null);
                received_default_rewards?: (boolean|null);
            }

            class Raid implements IRaid {
                constructor(properties?: POGOProtos.Data.Raid.IRaid);
                public raid_seed: (number|Long);
                public started_ms: (number|Long);
                public completed_ms: (number|Long);
                public encounter_pokemon_id: POGOProtos.Enums.PokemonId;
                public completed_battle: boolean;
                public received_rewards: boolean;
                public finished_encounter: boolean;
                public received_default_rewards: boolean;
                public static create(properties?: POGOProtos.Data.Raid.IRaid): POGOProtos.Data.Raid.Raid;
                public static encode(message: POGOProtos.Data.Raid.IRaid, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Data.Raid.IRaid, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Raid.Raid;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Raid.Raid;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Raid.Raid;
                public static toObject(message: POGOProtos.Data.Raid.Raid, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IRaidEncounter {
                pokemon?: (POGOProtos.Data.IPokemonData|null);
                encounter_id?: (number|Long|null);
                spawnpoint_id?: (string|null);
                capture_probabilities?: (POGOProtos.Data.Capture.ICaptureProbability|null);
                throws_remaining?: (number|null);
                raid_level?: (POGOProtos.Enums.RaidLevel|null);
                fort_id?: (string|null);
            }

            class RaidEncounter implements IRaidEncounter {
                constructor(properties?: POGOProtos.Data.Raid.IRaidEncounter);
                public pokemon?: (POGOProtos.Data.IPokemonData|null);
                public encounter_id: (number|Long);
                public spawnpoint_id: string;
                public capture_probabilities?: (POGOProtos.Data.Capture.ICaptureProbability|null);
                public throws_remaining: number;
                public raid_level: POGOProtos.Enums.RaidLevel;
                public fort_id: string;
                public static create(properties?: POGOProtos.Data.Raid.IRaidEncounter): POGOProtos.Data.Raid.RaidEncounter;
                public static encode(message: POGOProtos.Data.Raid.IRaidEncounter, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Data.Raid.IRaidEncounter, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Raid.RaidEncounter;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Raid.RaidEncounter;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Raid.RaidEncounter;
                public static toObject(message: POGOProtos.Data.Raid.RaidEncounter, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IRaidInfo {
                raid_seed?: (number|Long|null);
                raid_spawn_ms?: (number|Long|null);
                raid_battle_ms?: (number|Long|null);
                raid_end_ms?: (number|Long|null);
                raid_pokemon?: (POGOProtos.Data.IPokemonData|null);
                raid_level?: (POGOProtos.Enums.RaidLevel|null);
                complete?: (boolean|null);
                is_exclusive?: (boolean|null);
                is_raid_hidden?: (boolean|null);
            }

            class RaidInfo implements IRaidInfo {
                constructor(properties?: POGOProtos.Data.Raid.IRaidInfo);
                public raid_seed: (number|Long);
                public raid_spawn_ms: (number|Long);
                public raid_battle_ms: (number|Long);
                public raid_end_ms: (number|Long);
                public raid_pokemon?: (POGOProtos.Data.IPokemonData|null);
                public raid_level: POGOProtos.Enums.RaidLevel;
                public complete: boolean;
                public is_exclusive: boolean;
                public is_raid_hidden: boolean;
                public static create(properties?: POGOProtos.Data.Raid.IRaidInfo): POGOProtos.Data.Raid.RaidInfo;
                public static encode(message: POGOProtos.Data.Raid.IRaidInfo, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Data.Raid.IRaidInfo, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Raid.RaidInfo;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Raid.RaidInfo;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Raid.RaidInfo;
                public static toObject(message: POGOProtos.Data.Raid.RaidInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }
        }

        namespace Redeem {

            interface IPokeCandy {
                pokemon_id?: (number|Long|null);
                candy_count?: (number|null);
            }

            class PokeCandy implements IPokeCandy {
                constructor(properties?: POGOProtos.Data.Redeem.IPokeCandy);
                public pokemon_id: (number|Long);
                public candy_count: number;
                public static create(properties?: POGOProtos.Data.Redeem.IPokeCandy): POGOProtos.Data.Redeem.PokeCandy;
                public static encode(message: POGOProtos.Data.Redeem.IPokeCandy, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Data.Redeem.IPokeCandy, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Redeem.PokeCandy;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Redeem.PokeCandy;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Redeem.PokeCandy;
                public static toObject(message: POGOProtos.Data.Redeem.PokeCandy, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IRedeemedAvatarItem {
                avatar_template_id?: (string|null);
                item_count?: (number|null);
            }

            class RedeemedAvatarItem implements IRedeemedAvatarItem {
                constructor(properties?: POGOProtos.Data.Redeem.IRedeemedAvatarItem);
                public avatar_template_id: string;
                public item_count: number;
                public static create(properties?: POGOProtos.Data.Redeem.IRedeemedAvatarItem): POGOProtos.Data.Redeem.RedeemedAvatarItem;
                public static encode(message: POGOProtos.Data.Redeem.IRedeemedAvatarItem, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Data.Redeem.IRedeemedAvatarItem, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Redeem.RedeemedAvatarItem;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Redeem.RedeemedAvatarItem;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Redeem.RedeemedAvatarItem;
                public static toObject(message: POGOProtos.Data.Redeem.RedeemedAvatarItem, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IRedeemedItem {
                item?: (POGOProtos.Inventory.Item.ItemId|null);
                item_count?: (number|null);
            }

            class RedeemedItem implements IRedeemedItem {
                constructor(properties?: POGOProtos.Data.Redeem.IRedeemedItem);
                public item: POGOProtos.Inventory.Item.ItemId;
                public item_count: number;
                public static create(properties?: POGOProtos.Data.Redeem.IRedeemedItem): POGOProtos.Data.Redeem.RedeemedItem;
                public static encode(message: POGOProtos.Data.Redeem.IRedeemedItem, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Data.Redeem.IRedeemedItem, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.Redeem.RedeemedItem;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.Redeem.RedeemedItem;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Data.Redeem.RedeemedItem;
                public static toObject(message: POGOProtos.Data.Redeem.RedeemedItem, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }
        }

        interface IRedeemPasscodeReward {
            items?: (POGOProtos.Data.Redeem.IRedeemedItem[]|null);
            avatar_items?: (POGOProtos.Data.Redeem.IRedeemedAvatarItem[]|null);
            egg_pokemon?: (POGOProtos.Data.IPokemonData[]|null);
            pokemon?: (POGOProtos.Data.IPokemonData[]|null);
            poke_candy?: (POGOProtos.Data.Redeem.IPokeCandy[]|null);
            stardust?: (number|null);
            pokecoins?: (number|null);
            badges?: (POGOProtos.Enums.BadgeType[]|null);
        }

        class RedeemPasscodeReward implements IRedeemPasscodeReward {
            constructor(properties?: POGOProtos.Data.IRedeemPasscodeReward);
            public items: POGOProtos.Data.Redeem.IRedeemedItem[];
            public avatar_items: POGOProtos.Data.Redeem.IRedeemedAvatarItem[];
            public egg_pokemon: POGOProtos.Data.IPokemonData[];
            public pokemon: POGOProtos.Data.IPokemonData[];
            public poke_candy: POGOProtos.Data.Redeem.IPokeCandy[];
            public stardust: number;
            public pokecoins: number;
            public badges: POGOProtos.Enums.BadgeType[];
            public static create(properties?: POGOProtos.Data.IRedeemPasscodeReward): POGOProtos.Data.RedeemPasscodeReward;
            public static encode(message: POGOProtos.Data.IRedeemPasscodeReward, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: POGOProtos.Data.IRedeemPasscodeReward, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Data.RedeemPasscodeReward;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Data.RedeemPasscodeReward;
            public static fromObject(object: { [k: string]: any }): POGOProtos.Data.RedeemPasscodeReward;
            public static toObject(message: POGOProtos.Data.RedeemPasscodeReward, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }
    }

    namespace Enums {

        enum ActivityType {
            ACTIVITY_UNKNOWN = 0,
            ACTIVITY_CATCH_POKEMON = 1,
            ACTIVITY_CATCH_LEGEND_POKEMON = 2,
            ACTIVITY_FLEE_POKEMON = 3,
            ACTIVITY_DEFEAT_FORT = 4,
            ACTIVITY_EVOLVE_POKEMON = 5,
            ACTIVITY_HATCH_EGG = 6,
            ACTIVITY_WALK_KM = 7,
            ACTIVITY_POKEDEX_ENTRY_NEW = 8,
            ACTIVITY_CATCH_FIRST_THROW = 9,
            ACTIVITY_CATCH_NICE_THROW = 10,
            ACTIVITY_CATCH_GREAT_THROW = 11,
            ACTIVITY_CATCH_EXCELLENT_THROW = 12,
            ACTIVITY_CATCH_CURVEBALL = 13,
            ACTIVITY_CATCH_FIRST_CATCH_OF_DAY = 14,
            ACTIVITY_CATCH_MILESTONE = 15,
            ACTIVITY_TRAIN_POKEMON = 16,
            ACTIVITY_SEARCH_FORT = 17,
            ACTIVITY_RELEASE_POKEMON = 18,
            ACTIVITY_HATCH_EGG_SMALL_BONUS = 19,
            ACTIVITY_HATCH_EGG_MEDIUM_BONUS = 20,
            ACTIVITY_HATCH_EGG_LARGE_BONUS = 21,
            ACTIVITY_DEFEAT_GYM_DEFENDER = 22,
            ACTIVITY_DEFEAT_GYM_LEADER = 23,
            ACTIVITY_CATCH_FIRST_CATCH_STREAK_BONUS = 24,
            ACTIVITY_SEARCH_FORT_FIRST_OF_THE_DAY = 25,
            ACTIVITY_SEARCH_FORT_STREAK_BONUS = 26,
            ACTIVITY_DEFEAT_RAID_POKEMON = 27,
            ACTIVITY_FEED_BERRY = 28,
            ACTIVITY_SEARCH_GYM = 29,
            ACTIVITY_NEW_POKESTOP = 30,
            ACTIVITY_GYM_BATTLE_LOSS = 31,
            ACTIVITY_CATCH_AR_PLUS_BONUS = 32,
            ACTIVITY_CATCH_QUEST_POKEMON_ENCOUNTER = 33
        }

        enum BadgeType {
            BADGE_UNSET = 0,
            BADGE_TRAVEL_KM = 1,
            BADGE_POKEDEX_ENTRIES = 2,
            BADGE_CAPTURE_TOTAL = 3,
            BADGE_DEFEATED_FORT = 4,
            BADGE_EVOLVED_TOTAL = 5,
            BADGE_HATCHED_TOTAL = 6,
            BADGE_ENCOUNTERED_TOTAL = 7,
            BADGE_POKESTOPS_VISITED = 8,
            BADGE_UNIQUE_POKESTOPS = 9,
            BADGE_POKEBALL_THROWN = 10,
            BADGE_BIG_MAGIKARP = 11,
            BADGE_DEPLOYED_TOTAL = 12,
            BADGE_BATTLE_ATTACK_WON = 13,
            BADGE_BATTLE_TRAINING_WON = 14,
            BADGE_BATTLE_DEFEND_WON = 15,
            BADGE_PRESTIGE_RAISED = 16,
            BADGE_PRESTIGE_DROPPED = 17,
            BADGE_TYPE_NORMAL = 18,
            BADGE_TYPE_FIGHTING = 19,
            BADGE_TYPE_FLYING = 20,
            BADGE_TYPE_POISON = 21,
            BADGE_TYPE_GROUND = 22,
            BADGE_TYPE_ROCK = 23,
            BADGE_TYPE_BUG = 24,
            BADGE_TYPE_GHOST = 25,
            BADGE_TYPE_STEEL = 26,
            BADGE_TYPE_FIRE = 27,
            BADGE_TYPE_WATER = 28,
            BADGE_TYPE_GRASS = 29,
            BADGE_TYPE_ELECTRIC = 30,
            BADGE_TYPE_PSYCHIC = 31,
            BADGE_TYPE_ICE = 32,
            BADGE_TYPE_DRAGON = 33,
            BADGE_TYPE_DARK = 34,
            BADGE_TYPE_FAIRY = 35,
            BADGE_SMALL_RATTATA = 36,
            BADGE_PIKACHU = 37,
            BADGE_UNOWN = 38,
            BADGE_POKEDEX_ENTRIES_GEN2 = 39,
            BADGE_RAID_BATTLE_WON = 40,
            BADGE_LEGENDARY_BATTLE_WON = 41,
            BADGE_BERRIES_FED = 42,
            BADGE_HOURS_DEFENDED = 43,
            BADGE_PLACE_HOLDER = 44,
            BADGE_POKEDEX_ENTRIES_GEN3 = 45,
            BADGE_CHALLENGE_QUESTS = 46,
            BADGE_MEW_ENCOUNTER = 47,
            BADGE_EVENT_MIN = 2000,
            BADGE_CHICAGO_FEST_JULY_2017 = 2001,
            BADGE_PIKACHU_OUTBREAK_YOKOHAMA_2017 = 2002,
            BADGE_SAFARI_ZONE_EUROPE_2017 = 2003,
            BADGE_SAFARI_ZONE_EUROPE_2017_10_07 = 2004,
            BADGE_SAFARI_ZONE_EUROPE_2017_10_14 = 2005
        }

        enum CameraInterpolation {
            CAM_INTERP_CUT = 0,
            CAM_INTERP_LINEAR = 1,
            CAM_INTERP_SMOOTH = 2,
            CAM_INTERP_SMOOTH_ROT_LINEAR_MOVE = 3,
            CAM_INTERP_DEPENDS = 4
        }

        enum CameraTarget {
            CAM_TARGET_ATTACKER = 0,
            CAM_TARGET_ATTACKER_EDGE = 1,
            CAM_TARGET_ATTACKER_GROUND = 2,
            CAM_TARGET_DEFENDER = 3,
            CAM_TARGET_DEFENDER_EDGE = 4,
            CAM_TARGET_DEFENDER_GROUND = 5,
            CAM_TARGET_ATTACKER_DEFENDER = 6,
            CAM_TARGET_ATTACKER_DEFENDER_EDGE = 7,
            CAM_TARGET_DEFENDER_ATTACKER = 8,
            CAM_TARGET_DEFENDER_ATTACKER_EDGE = 9,
            CAM_TARGET_ATTACKER_DEFENDER_MIRROR = 11,
            CAM_TARGET_SHOULDER_ATTACKER_DEFENDER = 12,
            CAM_TARGET_SHOULDER_ATTACKER_DEFENDER_MIRROR = 13,
            CAM_TARGET_ATTACKER_DEFENDER_WORLD = 14
        }

        enum Costume {
            COSTUME_UNSET = 0,
            HOLIDAY_2016 = 1,
            ANNIVERSARY = 2,
            ONE_YEAR_ANNIVERSARY = 3,
            HALLOWEEN_2017 = 4
        }

        enum EncounterType {
            SPAWN_POINT = 0,
            INCENSE = 1,
            DISK = 2,
            POST_RAID = 3,
            STORY_QUEST = 4,
            QUEST_STAMP_CARD = 5,
            CHALLENGE_QUEST = 6
        }

        enum Filter {
            UNSET_FILTER = 0,
            ALL = 1,
            DEFAULT = 2,
            OWNED = 3,
            FEATURED = 4,
            PURCHASABLE = 5,
            UNLOCKABLE = 6
        }

        enum Form {
            FORM_UNSET = 0,
            UNOWN_A = 1,
            UNOWN_B = 2,
            UNOWN_C = 3,
            UNOWN_D = 4,
            UNOWN_E = 5,
            UNOWN_F = 6,
            UNOWN_G = 7,
            UNOWN_H = 8,
            UNOWN_I = 9,
            UNOWN_J = 10,
            UNOWN_K = 11,
            UNOWN_L = 12,
            UNOWN_M = 13,
            UNOWN_N = 14,
            UNOWN_O = 15,
            UNOWN_P = 16,
            UNOWN_Q = 17,
            UNOWN_R = 18,
            UNOWN_S = 19,
            UNOWN_T = 20,
            UNOWN_U = 21,
            UNOWN_V = 22,
            UNOWN_W = 23,
            UNOWN_X = 24,
            UNOWN_Y = 25,
            UNOWN_Z = 26,
            UNOWN_EXCLAMATION_POINT = 27,
            UNOWN_QUESTION_MARK = 28,
            CASTFORM_NORMAL = 29,
            CASTFORM_SUNNY = 30,
            CASTFORM_RAINY = 31,
            CASTFORM_SNOWY = 32,
            DEOXYS_NORMAL = 33,
            DEOXYS_ATTACK = 34,
            DEOXYS_DEFENSE = 35,
            DEOXYS_SPEED = 36,
            SPINDA_00 = 37,
            SPINDA_01 = 38,
            SPINDA_02 = 39,
            SPINDA_03 = 40,
            SPINDA_04 = 41,
            SPINDA_05 = 42,
            SPINDA_06 = 43,
            SPINDA_07 = 44
        }

        enum Gender {
            GENDER_UNSET = 0,
            MALE = 1,
            FEMALE = 2,
            GENDERLESS = 3
        }

        enum GymBadgeType {
            GYM_BADGE_UNSET = 0,
            GYM_BADGE_VANILLA = 1,
            GYM_BADGE_BRONZE = 2,
            GYM_BADGE_SILVER = 3,
            GYM_BADGE_GOLD = 4
        }

        enum HoloIapItemCategory {
            IAP_CATEGORY_NONE = 0,
            IAP_CATEGORY_BUNDLE = 1,
            IAP_CATEGORY_ITEMS = 2,
            IAP_CATEGORY_UPGRADES = 3,
            IAP_CATEGORY_POKECOINS = 4,
            IAP_CATEGORY_AVATAR = 5,
            IAP_CATEGORY_AVATAR_STORE_LINK = 6
        }

        enum ItemCategory {
            ITEM_CATEGORY_NONE = 0,
            ITEM_CATEGORY_POKEBALL = 1,
            ITEM_CATEGORY_FOOD = 2,
            ITEM_CATEGORY_MEDICINE = 3,
            ITEM_CATEGORY_BOOST = 4,
            ITEM_CATEGORY_UTILITES = 5,
            ITEM_CATEGORY_CAMERA = 6,
            ITEM_CATEGORY_DISK = 7,
            ITEM_CATEGORY_INCUBATOR = 8,
            ITEM_CATEGORY_INCENSE = 9,
            ITEM_CATEGORY_XP_BOOST = 10,
            ITEM_CATEGORY_INVENTORY_UPGRADE = 11,
            ITEM_CATEGORY_EVOLUTION_REQUIREMENT = 12,
            ITEM_CATEGORY_MOVE_REROLL = 13,
            ITEM_CATEGORY_CANDY = 14,
            ITEM_CATEGORY_RAID_TICKET = 15,
            ITEM_CATEGORY_STARDUST_BOOST = 16
        }

        enum ItemEffect {
            ITEM_EFFECT_NONE = 0,
            ITEM_EFFECT_CAP_NO_FLEE = 1000,
            ITEM_EFFECT_CAP_NO_MOVEMENT = 1002,
            ITEM_EFFECT_CAP_NO_THREAT = 1003,
            ITEM_EFFECT_CAP_TARGET_MAX = 1004,
            ITEM_EFFECT_CAP_TARGET_SLOW = 1005,
            ITEM_EFFECT_CAP_CHANCE_NIGHT = 1006,
            ITEM_EFFECT_CAP_CHANCE_TRAINER = 1007,
            ITEM_EFFECT_CAP_CHANCE_FIRST_THROW = 1008,
            ITEM_EFFECT_CAP_CHANCE_LEGEND = 1009,
            ITEM_EFFECT_CAP_CHANCE_HEAVY = 1010,
            ITEM_EFFECT_CAP_CHANCE_REPEAT = 1011,
            ITEM_EFFECT_CAP_CHANCE_MULTI_THROW = 1012,
            ITEM_EFFECT_CAP_CHANCE_ALWAYS = 1013,
            ITEM_EFFECT_CAP_CHANCE_SINGLE_THROW = 1014,
            ITEM_EFFECT_CANDY_AWARD = 1015,
            ITEM_EFFECT_FULL_MOTIVATION = 1016
        }

        enum NotificationCategory {
            UNSET_NotificationCategory = 0,
            GYM_REMOVAL = 1,
            POKEMON_HUNGRY = 2,
            POKEMON_WON = 3,
            EXCLUSIVE_RAID_INVITE = 4,
            EXCLUSIVE_RAID_CANCELLATION = 5
        }

        enum NotificationState {
            UNSET_STATE = 0,
            VIEWED = 1
        }

        enum Platform {
            UNSET = 0,
            IOS = 1,
            ANDROID = 2,
            OSX = 3,
            WINDOWS = 4,
            APPLE_WATCH = 5
        }

        enum PokemonFamilyId {
            FAMILY_UNSET = 0,
            FAMILY_BULBASAUR = 1,
            FAMILY_CHARMANDER = 4,
            FAMILY_SQUIRTLE = 7,
            FAMILY_CATERPIE = 10,
            FAMILY_WEEDLE = 13,
            FAMILY_PIDGEY = 16,
            FAMILY_RATTATA = 19,
            FAMILY_SPEAROW = 21,
            FAMILY_EKANS = 23,
            FAMILY_PIKACHU = 25,
            FAMILY_SANDSHREW = 27,
            FAMILY_NIDORAN_FEMALE = 29,
            FAMILY_NIDORAN_MALE = 32,
            FAMILY_CLEFAIRY = 35,
            FAMILY_VULPIX = 37,
            FAMILY_JIGGLYPUFF = 39,
            FAMILY_ZUBAT = 41,
            FAMILY_ODDISH = 43,
            FAMILY_PARAS = 46,
            FAMILY_VENONAT = 48,
            FAMILY_DIGLETT = 50,
            FAMILY_MEOWTH = 52,
            FAMILY_PSYDUCK = 54,
            FAMILY_MANKEY = 56,
            FAMILY_GROWLITHE = 58,
            FAMILY_POLIWAG = 60,
            FAMILY_ABRA = 63,
            FAMILY_MACHOP = 66,
            FAMILY_BELLSPROUT = 69,
            FAMILY_TENTACOOL = 72,
            FAMILY_GEODUDE = 74,
            FAMILY_PONYTA = 77,
            FAMILY_SLOWPOKE = 79,
            FAMILY_MAGNEMITE = 81,
            FAMILY_FARFETCHD = 83,
            FAMILY_DODUO = 84,
            FAMILY_SEEL = 86,
            FAMILY_GRIMER = 88,
            FAMILY_SHELLDER = 90,
            FAMILY_GASTLY = 92,
            FAMILY_ONIX = 95,
            FAMILY_DROWZEE = 96,
            FAMILY_HYPNO = 97,
            FAMILY_KRABBY = 98,
            FAMILY_VOLTORB = 100,
            FAMILY_EXEGGCUTE = 102,
            FAMILY_CUBONE = 104,
            FAMILY_HITMONLEE = 106,
            FAMILY_HITMONCHAN = 107,
            FAMILY_LICKITUNG = 108,
            FAMILY_KOFFING = 109,
            FAMILY_RHYHORN = 111,
            FAMILY_CHANSEY = 113,
            FAMILY_TANGELA = 114,
            FAMILY_KANGASKHAN = 115,
            FAMILY_HORSEA = 116,
            FAMILY_GOLDEEN = 118,
            FAMILY_STARYU = 120,
            FAMILY_MR_MIME = 122,
            FAMILY_SCYTHER = 123,
            FAMILY_JYNX = 124,
            FAMILY_ELECTABUZZ = 125,
            FAMILY_MAGMAR = 126,
            FAMILY_PINSIR = 127,
            FAMILY_TAUROS = 128,
            FAMILY_MAGIKARP = 129,
            FAMILY_LAPRAS = 131,
            FAMILY_DITTO = 132,
            FAMILY_EEVEE = 133,
            FAMILY_PORYGON = 137,
            FAMILY_OMANYTE = 138,
            FAMILY_KABUTO = 140,
            FAMILY_AERODACTYL = 142,
            FAMILY_SNORLAX = 143,
            FAMILY_ARTICUNO = 144,
            FAMILY_ZAPDOS = 145,
            FAMILY_MOLTRES = 146,
            FAMILY_DRATINI = 147,
            FAMILY_MEWTWO = 150,
            FAMILY_MEW = 151,
            FAMILY_CHIKORITA = 152,
            FAMILY_CYNDAQUIL = 155,
            FAMILY_TOTODILE = 158,
            FAMILY_SENTRET = 161,
            FAMILY_HOOTHOOT = 163,
            FAMILY_LEDYBA = 165,
            FAMILY_SPINARAK = 167,
            FAMILY_CHINCHOU = 170,
            FAMILY_TOGEPI = 175,
            FAMILY_NATU = 177,
            FAMILY_MAREEP = 179,
            FAMILY_MARILL = 183,
            FAMILY_SUDOWOODO = 185,
            FAMILY_HOPPIP = 187,
            FAMILY_AIPOM = 190,
            FAMILY_SUNKERN = 191,
            FAMILY_YANMA = 193,
            FAMILY_WOOPER = 194,
            FAMILY_MURKROW = 198,
            FAMILY_MISDREAVUS = 200,
            FAMILY_UNOWN = 201,
            FAMILY_WOBBUFFET = 202,
            FAMILY_GIRAFARIG = 203,
            FAMILY_PINECO = 204,
            FAMILY_DUNSPARCE = 206,
            FAMILY_GLIGAR = 207,
            FAMILY_SNUBBULL = 209,
            FAMILY_QWILFISH = 211,
            FAMILY_SHUCKLE = 213,
            FAMILY_HERACROSS = 214,
            FAMILY_SNEASEL = 215,
            FAMILY_TEDDIURSA = 216,
            FAMILY_SLUGMA = 218,
            FAMILY_SWINUB = 220,
            FAMILY_CORSOLA = 222,
            FAMILY_REMORAID = 223,
            FAMILY_DELIBIRD = 225,
            FAMILY_MANTINE = 226,
            FAMILY_SKARMORY = 227,
            FAMILY_HOUNDOUR = 228,
            FAMILY_PHANPY = 231,
            FAMILY_STANTLER = 234,
            FAMILY_SMEARGLE = 235,
            FAMILY_TYROGUE = 236,
            FAMILY_MILTANK = 241,
            FAMILY_RAIKOU = 243,
            FAMILY_ENTEI = 244,
            FAMILY_SUICUNE = 245,
            FAMILY_LARVITAR = 246,
            FAMILY_LUGIA = 249,
            FAMILY_HO_OH = 250,
            FAMILY_CELEBI = 251,
            FAMILY_TREECKO = 252,
            FAMILY_TORCHIC = 255,
            FAMILY_MUDKIP = 258,
            FAMILY_POOCHYENA = 261,
            FAMILY_ZIGZAGOON = 263,
            FAMILY_WURMPLE = 265,
            FAMILY_LOTAD = 270,
            FAMILY_SEEDOT = 273,
            FAMILY_TAILLOW = 276,
            FAMILY_WINGULL = 278,
            FAMILY_RALTS = 280,
            FAMILY_SURSKIT = 283,
            FAMILY_SHROOMISH = 285,
            FAMILY_SLAKOTH = 287,
            FAMILY_NINCADA = 290,
            FAMILY_WHISMUR = 293,
            FAMILY_MAKUHITA = 296,
            FAMILY_NOSEPASS = 299,
            FAMILY_SKITTY = 300,
            FAMILY_SABLEYE = 302,
            FAMILY_MAWILE = 303,
            FAMILY_ARON = 304,
            FAMILY_MEDITITE = 307,
            FAMILY_ELECTRIKE = 309,
            FAMILY_PLUSLE = 311,
            FAMILY_MINUN = 312,
            FAMILY_VOLBEAT = 313,
            FAMILY_ILLUMISE = 314,
            FAMILY_ROSELIA = 315,
            FAMILY_GULPIN = 316,
            FAMILY_CARVANHA = 318,
            FAMILY_WAILMER = 320,
            FAMILY_NUMEL = 322,
            FAMILY_TORKOAL = 324,
            FAMILY_SPOINK = 325,
            FAMILY_SPINDA = 327,
            FAMILY_TRAPINCH = 328,
            FAMILY_CACNEA = 331,
            FAMILY_SWABLU = 333,
            FAMILY_ZANGOOSE = 335,
            FAMILY_SEVIPER = 336,
            FAMILY_LUNATONE = 337,
            FAMILY_SOLROCK = 338,
            FAMILY_BARBOACH = 339,
            FAMILY_CORPHISH = 341,
            FAMILY_BALTOY = 343,
            FAMILY_LILEEP = 345,
            FAMILY_ANORITH = 347,
            FAMILY_FEEBAS = 349,
            FAMILY_CASTFORM = 351,
            FAMILY_KECLEON = 352,
            FAMILY_SHUPPET = 353,
            FAMILY_DUSKULL = 355,
            FAMILY_TROPIUS = 357,
            FAMILY_CHIMECHO = 358,
            FAMILY_ABSOL = 359,
            FAMILY_SNORUNT = 361,
            FAMILY_SPHEAL = 363,
            FAMILY_CLAMPERL = 366,
            FAMILY_RELICANTH = 369,
            FAMILY_LUVDISC = 370,
            FAMILY_BAGON = 371,
            FAMILY_BELDUM = 374,
            FAMILY_REGIROCK = 377,
            FAMILY_REGICE = 378,
            FAMILY_REGISTEEL = 379,
            FAMILY_LATIAS = 380,
            FAMILY_LATIOS = 381,
            FAMILY_KYOGRE = 382,
            FAMILY_GROUDON = 383,
            FAMILY_RAYQUAZA = 384,
            FAMILY_JIRACHI = 385,
            FAMILY_DEOXYS = 386
        }

        enum PokemonId {
            MISSINGNO = 0,
            BULBASAUR = 1,
            IVYSAUR = 2,
            VENUSAUR = 3,
            CHARMANDER = 4,
            CHARMELEON = 5,
            CHARIZARD = 6,
            SQUIRTLE = 7,
            WARTORTLE = 8,
            BLASTOISE = 9,
            CATERPIE = 10,
            METAPOD = 11,
            BUTTERFREE = 12,
            WEEDLE = 13,
            KAKUNA = 14,
            BEEDRILL = 15,
            PIDGEY = 16,
            PIDGEOTTO = 17,
            PIDGEOT = 18,
            RATTATA = 19,
            RATICATE = 20,
            SPEAROW = 21,
            FEAROW = 22,
            EKANS = 23,
            ARBOK = 24,
            PIKACHU = 25,
            RAICHU = 26,
            SANDSHREW = 27,
            SANDSLASH = 28,
            NIDORAN_FEMALE = 29,
            NIDORINA = 30,
            NIDOQUEEN = 31,
            NIDORAN_MALE = 32,
            NIDORINO = 33,
            NIDOKING = 34,
            CLEFAIRY = 35,
            CLEFABLE = 36,
            VULPIX = 37,
            NINETALES = 38,
            JIGGLYPUFF = 39,
            WIGGLYTUFF = 40,
            ZUBAT = 41,
            GOLBAT = 42,
            ODDISH = 43,
            GLOOM = 44,
            VILEPLUME = 45,
            PARAS = 46,
            PARASECT = 47,
            VENONAT = 48,
            VENOMOTH = 49,
            DIGLETT = 50,
            DUGTRIO = 51,
            MEOWTH = 52,
            PERSIAN = 53,
            PSYDUCK = 54,
            GOLDUCK = 55,
            MANKEY = 56,
            PRIMEAPE = 57,
            GROWLITHE = 58,
            ARCANINE = 59,
            POLIWAG = 60,
            POLIWHIRL = 61,
            POLIWRATH = 62,
            ABRA = 63,
            KADABRA = 64,
            ALAKAZAM = 65,
            MACHOP = 66,
            MACHOKE = 67,
            MACHAMP = 68,
            BELLSPROUT = 69,
            WEEPINBELL = 70,
            VICTREEBEL = 71,
            TENTACOOL = 72,
            TENTACRUEL = 73,
            GEODUDE = 74,
            GRAVELER = 75,
            GOLEM = 76,
            PONYTA = 77,
            RAPIDASH = 78,
            SLOWPOKE = 79,
            SLOWBRO = 80,
            MAGNEMITE = 81,
            MAGNETON = 82,
            FARFETCHD = 83,
            DODUO = 84,
            DODRIO = 85,
            SEEL = 86,
            DEWGONG = 87,
            GRIMER = 88,
            MUK = 89,
            SHELLDER = 90,
            CLOYSTER = 91,
            GASTLY = 92,
            HAUNTER = 93,
            GENGAR = 94,
            ONIX = 95,
            DROWZEE = 96,
            HYPNO = 97,
            KRABBY = 98,
            KINGLER = 99,
            VOLTORB = 100,
            ELECTRODE = 101,
            EXEGGCUTE = 102,
            EXEGGUTOR = 103,
            CUBONE = 104,
            MAROWAK = 105,
            HITMONLEE = 106,
            HITMONCHAN = 107,
            LICKITUNG = 108,
            KOFFING = 109,
            WEEZING = 110,
            RHYHORN = 111,
            RHYDON = 112,
            CHANSEY = 113,
            TANGELA = 114,
            KANGASKHAN = 115,
            HORSEA = 116,
            SEADRA = 117,
            GOLDEEN = 118,
            SEAKING = 119,
            STARYU = 120,
            STARMIE = 121,
            MR_MIME = 122,
            SCYTHER = 123,
            JYNX = 124,
            ELECTABUZZ = 125,
            MAGMAR = 126,
            PINSIR = 127,
            TAUROS = 128,
            MAGIKARP = 129,
            GYARADOS = 130,
            LAPRAS = 131,
            DITTO = 132,
            EEVEE = 133,
            VAPOREON = 134,
            JOLTEON = 135,
            FLAREON = 136,
            PORYGON = 137,
            OMANYTE = 138,
            OMASTAR = 139,
            KABUTO = 140,
            KABUTOPS = 141,
            AERODACTYL = 142,
            SNORLAX = 143,
            ARTICUNO = 144,
            ZAPDOS = 145,
            MOLTRES = 146,
            DRATINI = 147,
            DRAGONAIR = 148,
            DRAGONITE = 149,
            MEWTWO = 150,
            MEW = 151,
            CHIKORITA = 152,
            BAYLEEF = 153,
            MEGANIUM = 154,
            CYNDAQUIL = 155,
            QUILAVA = 156,
            TYPHLOSION = 157,
            TOTODILE = 158,
            CROCONAW = 159,
            FERALIGATR = 160,
            SENTRET = 161,
            FURRET = 162,
            HOOTHOOT = 163,
            NOCTOWL = 164,
            LEDYBA = 165,
            LEDIAN = 166,
            SPINARAK = 167,
            ARIADOS = 168,
            CROBAT = 169,
            CHINCHOU = 170,
            LANTURN = 171,
            PICHU = 172,
            CLEFFA = 173,
            IGGLYBUFF = 174,
            TOGEPI = 175,
            TOGETIC = 176,
            NATU = 177,
            XATU = 178,
            MAREEP = 179,
            FLAAFFY = 180,
            AMPHAROS = 181,
            BELLOSSOM = 182,
            MARILL = 183,
            AZUMARILL = 184,
            SUDOWOODO = 185,
            POLITOED = 186,
            HOPPIP = 187,
            SKIPLOOM = 188,
            JUMPLUFF = 189,
            AIPOM = 190,
            SUNKERN = 191,
            SUNFLORA = 192,
            YANMA = 193,
            WOOPER = 194,
            QUAGSIRE = 195,
            ESPEON = 196,
            UMBREON = 197,
            MURKROW = 198,
            SLOWKING = 199,
            MISDREAVUS = 200,
            UNOWN = 201,
            WOBBUFFET = 202,
            GIRAFARIG = 203,
            PINECO = 204,
            FORRETRESS = 205,
            DUNSPARCE = 206,
            GLIGAR = 207,
            STEELIX = 208,
            SNUBBULL = 209,
            GRANBULL = 210,
            QWILFISH = 211,
            SCIZOR = 212,
            SHUCKLE = 213,
            HERACROSS = 214,
            SNEASEL = 215,
            TEDDIURSA = 216,
            URSARING = 217,
            SLUGMA = 218,
            MAGCARGO = 219,
            SWINUB = 220,
            PILOSWINE = 221,
            CORSOLA = 222,
            REMORAID = 223,
            OCTILLERY = 224,
            DELIBIRD = 225,
            MANTINE = 226,
            SKARMORY = 227,
            HOUNDOUR = 228,
            HOUNDOOM = 229,
            KINGDRA = 230,
            PHANPY = 231,
            DONPHAN = 232,
            PORYGON2 = 233,
            STANTLER = 234,
            SMEARGLE = 235,
            TYROGUE = 236,
            HITMONTOP = 237,
            SMOOCHUM = 238,
            ELEKID = 239,
            MAGBY = 240,
            MILTANK = 241,
            BLISSEY = 242,
            RAIKOU = 243,
            ENTEI = 244,
            SUICUNE = 245,
            LARVITAR = 246,
            PUPITAR = 247,
            TYRANITAR = 248,
            LUGIA = 249,
            HO_OH = 250,
            CELEBI = 251,
            TREECKO = 252,
            GROVYLE = 253,
            SCEPTILE = 254,
            TORCHIC = 255,
            COMBUSKEN = 256,
            BLAZIKEN = 257,
            MUDKIP = 258,
            MARSHTOMP = 259,
            SWAMPERT = 260,
            POOCHYENA = 261,
            MIGHTYENA = 262,
            ZIGZAGOON = 263,
            LINOONE = 264,
            WURMPLE = 265,
            SILCOON = 266,
            BEAUTIFLY = 267,
            CASCOON = 268,
            DUSTOX = 269,
            LOTAD = 270,
            LOMBRE = 271,
            LUDICOLO = 272,
            SEEDOT = 273,
            NUZLEAF = 274,
            SHIFTRY = 275,
            TAILLOW = 276,
            SWELLOW = 277,
            WINGULL = 278,
            PELIPPER = 279,
            RALTS = 280,
            KIRLIA = 281,
            GARDEVOIR = 282,
            SURSKIT = 283,
            MASQUERAIN = 284,
            SHROOMISH = 285,
            BRELOOM = 286,
            SLAKOTH = 287,
            VIGOROTH = 288,
            SLAKING = 289,
            NINCADA = 290,
            NINJASK = 291,
            SHEDINJA = 292,
            WHISMUR = 293,
            LOUDRED = 294,
            EXPLOUD = 295,
            MAKUHITA = 296,
            HARIYAMA = 297,
            AZURILL = 298,
            NOSEPASS = 299,
            SKITTY = 300,
            DELCATTY = 301,
            SABLEYE = 302,
            MAWILE = 303,
            ARON = 304,
            LAIRON = 305,
            AGGRON = 306,
            MEDITITE = 307,
            MEDICHAM = 308,
            ELECTRIKE = 309,
            MANECTRIC = 310,
            PLUSLE = 311,
            MINUN = 312,
            VOLBEAT = 313,
            ILLUMISE = 314,
            ROSELIA = 315,
            GULPIN = 316,
            SWALOT = 317,
            CARVANHA = 318,
            SHARPEDO = 319,
            WAILMER = 320,
            WAILORD = 321,
            NUMEL = 322,
            CAMERUPT = 323,
            TORKOAL = 324,
            SPOINK = 325,
            GRUMPIG = 326,
            SPINDA = 327,
            TRAPINCH = 328,
            VIBRAVA = 329,
            FLYGON = 330,
            CACNEA = 331,
            CACTURNE = 332,
            SWABLU = 333,
            ALTARIA = 334,
            ZANGOOSE = 335,
            SEVIPER = 336,
            LUNATONE = 337,
            SOLROCK = 338,
            BARBOACH = 339,
            WHISCASH = 340,
            CORPHISH = 341,
            CRAWDAUNT = 342,
            BALTOY = 343,
            CLAYDOL = 344,
            LILEEP = 345,
            CRADILY = 346,
            ANORITH = 347,
            ARMALDO = 348,
            FEEBAS = 349,
            MILOTIC = 350,
            CASTFORM = 351,
            KECLEON = 352,
            SHUPPET = 353,
            BANETTE = 354,
            DUSKULL = 355,
            DUSCLOPS = 356,
            TROPIUS = 357,
            CHIMECHO = 358,
            ABSOL = 359,
            WYNAUT = 360,
            SNORUNT = 361,
            GLALIE = 362,
            SPHEAL = 363,
            SEALEO = 364,
            WALREIN = 365,
            CLAMPERL = 366,
            HUNTAIL = 367,
            GOREBYSS = 368,
            RELICANTH = 369,
            LUVDISC = 370,
            BAGON = 371,
            SHELGON = 372,
            SALAMENCE = 373,
            BELDUM = 374,
            METANG = 375,
            METAGROSS = 376,
            REGIROCK = 377,
            REGICE = 378,
            REGISTEEL = 379,
            LATIAS = 380,
            LATIOS = 381,
            KYOGRE = 382,
            GROUDON = 383,
            RAYQUAZA = 384,
            JIRACHI = 385,
            DEOXYS = 386
        }

        enum PokemonMove {
            MOVE_UNSET = 0,
            THUNDER_SHOCK = 1,
            QUICK_ATTACK = 2,
            SCRATCH = 3,
            EMBER = 4,
            VINE_WHIP = 5,
            TACKLE = 6,
            RAZOR_LEAF = 7,
            TAKE_DOWN = 8,
            WATER_GUN = 9,
            BITE = 10,
            POUND = 11,
            DOUBLE_SLAP = 12,
            WRAP = 13,
            HYPER_BEAM = 14,
            LICK = 15,
            DARK_PULSE = 16,
            SMOG = 17,
            SLUDGE = 18,
            METAL_CLAW = 19,
            VICE_GRIP = 20,
            FLAME_WHEEL = 21,
            MEGAHORN = 22,
            WING_ATTACK = 23,
            FLAMETHROWER = 24,
            SUCKER_PUNCH = 25,
            DIG = 26,
            LOW_KICK = 27,
            CROSS_CHOP = 28,
            PSYCHO_CUT = 29,
            PSYBEAM = 30,
            EARTHQUAKE = 31,
            STONE_EDGE = 32,
            ICE_PUNCH = 33,
            HEART_STAMP = 34,
            DISCHARGE = 35,
            FLASH_CANNON = 36,
            PECK = 37,
            DRILL_PECK = 38,
            ICE_BEAM = 39,
            BLIZZARD = 40,
            AIR_SLASH = 41,
            HEAT_WAVE = 42,
            TWINEEDLE = 43,
            POISON_JAB = 44,
            AERIAL_ACE = 45,
            DRILL_RUN = 46,
            PETAL_BLIZZARD = 47,
            MEGA_DRAIN = 48,
            BUG_BUZZ = 49,
            POISON_FANG = 50,
            NIGHT_SLASH = 51,
            SLASH = 52,
            BUBBLE_BEAM = 53,
            SUBMISSION = 54,
            KARATE_CHOP = 55,
            LOW_SWEEP = 56,
            AQUA_JET = 57,
            AQUA_TAIL = 58,
            SEED_BOMB = 59,
            PSYSHOCK = 60,
            ROCK_THROW = 61,
            ANCIENT_POWER = 62,
            ROCK_TOMB = 63,
            ROCK_SLIDE = 64,
            POWER_GEM = 65,
            SHADOW_SNEAK = 66,
            SHADOW_PUNCH = 67,
            SHADOW_CLAW = 68,
            OMINOUS_WIND = 69,
            SHADOW_BALL = 70,
            BULLET_PUNCH = 71,
            MAGNET_BOMB = 72,
            STEEL_WING = 73,
            IRON_HEAD = 74,
            PARABOLIC_CHARGE = 75,
            SPARK = 76,
            THUNDER_PUNCH = 77,
            THUNDER = 78,
            THUNDERBOLT = 79,
            TWISTER = 80,
            DRAGON_BREATH = 81,
            DRAGON_PULSE = 82,
            DRAGON_CLAW = 83,
            DISARMING_VOICE = 84,
            DRAINING_KISS = 85,
            DAZZLING_GLEAM = 86,
            MOONBLAST = 87,
            PLAY_ROUGH = 88,
            CROSS_POISON = 89,
            SLUDGE_BOMB = 90,
            SLUDGE_WAVE = 91,
            GUNK_SHOT = 92,
            MUD_SHOT = 93,
            BONE_CLUB = 94,
            BULLDOZE = 95,
            MUD_BOMB = 96,
            FURY_CUTTER = 97,
            BUG_BITE = 98,
            SIGNAL_BEAM = 99,
            X_SCISSOR = 100,
            FLAME_CHARGE = 101,
            FLAME_BURST = 102,
            FIRE_BLAST = 103,
            BRINE = 104,
            WATER_PULSE = 105,
            SCALD = 106,
            HYDRO_PUMP = 107,
            PSYCHIC = 108,
            PSYSTRIKE = 109,
            ICE_SHARD = 110,
            ICY_WIND = 111,
            FROST_BREATH = 112,
            ABSORB = 113,
            GIGA_DRAIN = 114,
            FIRE_PUNCH = 115,
            SOLAR_BEAM = 116,
            LEAF_BLADE = 117,
            POWER_WHIP = 118,
            SPLASH = 119,
            ACID = 120,
            AIR_CUTTER = 121,
            HURRICANE = 122,
            BRICK_BREAK = 123,
            CUT = 124,
            SWIFT = 125,
            HORN_ATTACK = 126,
            STOMP = 127,
            HEADBUTT = 128,
            HYPER_FANG = 129,
            SLAM = 130,
            BODY_SLAM = 131,
            REST = 132,
            STRUGGLE = 133,
            SCALD_BLASTOISE = 134,
            HYDRO_PUMP_BLASTOISE = 135,
            WRAP_GREEN = 136,
            WRAP_PINK = 137,
            FURY_CUTTER_FAST = 200,
            BUG_BITE_FAST = 201,
            BITE_FAST = 202,
            SUCKER_PUNCH_FAST = 203,
            DRAGON_BREATH_FAST = 204,
            THUNDER_SHOCK_FAST = 205,
            SPARK_FAST = 206,
            LOW_KICK_FAST = 207,
            KARATE_CHOP_FAST = 208,
            EMBER_FAST = 209,
            WING_ATTACK_FAST = 210,
            PECK_FAST = 211,
            LICK_FAST = 212,
            SHADOW_CLAW_FAST = 213,
            VINE_WHIP_FAST = 214,
            RAZOR_LEAF_FAST = 215,
            MUD_SHOT_FAST = 216,
            ICE_SHARD_FAST = 217,
            FROST_BREATH_FAST = 218,
            QUICK_ATTACK_FAST = 219,
            SCRATCH_FAST = 220,
            TACKLE_FAST = 221,
            POUND_FAST = 222,
            CUT_FAST = 223,
            POISON_JAB_FAST = 224,
            ACID_FAST = 225,
            PSYCHO_CUT_FAST = 226,
            ROCK_THROW_FAST = 227,
            METAL_CLAW_FAST = 228,
            BULLET_PUNCH_FAST = 229,
            WATER_GUN_FAST = 230,
            SPLASH_FAST = 231,
            WATER_GUN_FAST_BLASTOISE = 232,
            MUD_SLAP_FAST = 233,
            ZEN_HEADBUTT_FAST = 234,
            CONFUSION_FAST = 235,
            POISON_STING_FAST = 236,
            BUBBLE_FAST = 237,
            FEINT_ATTACK_FAST = 238,
            STEEL_WING_FAST = 239,
            FIRE_FANG_FAST = 240,
            ROCK_SMASH_FAST = 241,
            TRANSFORM_FAST = 242,
            COUNTER_FAST = 243,
            POWDER_SNOW_FAST = 244,
            CLOSE_COMBAT = 245,
            DYNAMIC_PUNCH = 246,
            FOCUS_BLAST = 247,
            AURORA_BEAM = 248,
            CHARGE_BEAM_FAST = 249,
            VOLT_SWITCH_FAST = 250,
            WILD_CHARGE = 251,
            ZAP_CANNON = 252,
            DRAGON_TAIL_FAST = 253,
            AVALANCHE = 254,
            AIR_SLASH_FAST = 255,
            BRAVE_BIRD = 256,
            SKY_ATTACK = 257,
            SAND_TOMB = 258,
            ROCK_BLAST = 259,
            INFESTATION_FAST = 260,
            STRUGGLE_BUG_FAST = 261,
            SILVER_WIND = 262,
            ASTONISH_FAST = 263,
            HEX_FAST = 264,
            NIGHT_SHADE = 265,
            IRON_TAIL_FAST = 266,
            GYRO_BALL = 267,
            HEAVY_SLAM = 268,
            FIRE_SPIN_FAST = 269,
            OVERHEAT = 270,
            BULLET_SEED_FAST = 271,
            GRASS_KNOT = 272,
            ENERGY_BALL = 273,
            EXTRASENSORY_FAST = 274,
            FUTURESIGHT = 275,
            MIRROR_COAT = 276,
            OUTRAGE = 277,
            SNARL_FAST = 278,
            CRUNCH = 279,
            FOUL_PLAY = 280,
            HIDDEN_POWER_FAST = 281,
            TAKE_DOWN_FAST = 282,
            WATERFALL_FAST = 283,
            SURF = 284,
            DRACO_METEOR = 285,
            DOOM_DESIRE = 286,
            YAWN_FAST = 287,
            PSYCHO_BOOST = 288,
            ORIGIN_PULSE = 289,
            PRECIPICE_BLADES = 290,
            PRESENT_FAST = 291,
            WEATHER_BALL_FIRE = 292,
            WEATHER_BALL_ICE = 293,
            WEATHER_BALL_ROCK = 294,
            WEATHER_BALL_WATER = 295,
            FRENZY_PLANT = 296
        }

        enum PokemonMovementType {
            MOVEMENT_STATIC = 0,
            MOVEMENT_JUMP = 1,
            MOVEMENT_VERTICAL = 2,
            MOVEMENT_PSYCHIC = 3,
            MOVEMENT_ELECTRIC = 4,
            MOVEMENT_FLYING = 5,
            MOVEMENT_HOVERING = 6
        }

        enum PokemonRarity {
            POKEMON_RARITY_NORMAL = 0,
            POKEMON_RARITY_LEGENDARY = 1,
            POKEMON_RARITY_MYTHIC = 2
        }

        enum PokemonType {
            POKEMON_TYPE_NONE = 0,
            POKEMON_TYPE_NORMAL = 1,
            POKEMON_TYPE_FIGHTING = 2,
            POKEMON_TYPE_FLYING = 3,
            POKEMON_TYPE_POISON = 4,
            POKEMON_TYPE_GROUND = 5,
            POKEMON_TYPE_ROCK = 6,
            POKEMON_TYPE_BUG = 7,
            POKEMON_TYPE_GHOST = 8,
            POKEMON_TYPE_STEEL = 9,
            POKEMON_TYPE_FIRE = 10,
            POKEMON_TYPE_WATER = 11,
            POKEMON_TYPE_GRASS = 12,
            POKEMON_TYPE_ELECTRIC = 13,
            POKEMON_TYPE_PSYCHIC = 14,
            POKEMON_TYPE_ICE = 15,
            POKEMON_TYPE_DRAGON = 16,
            POKEMON_TYPE_DARK = 17,
            POKEMON_TYPE_FAIRY = 18
        }

        enum QuestType {
            QUEST_UNKNOWN_TYPE = 0,
            QUEST_FIRST_CATCH_OF_THE_DAY = 1,
            QUEST_FIRST_POKESTOP_OF_THE_DAY = 2,
            QUEST_MULTI_PART = 3,
            QUEST_CATCH_POKEMON = 4,
            QUEST_SPIN_POKESTOP = 5,
            QUEST_HATCH_EGG = 6,
            QUEST_COMPLETE_GYM_BATTLE = 7,
            QUEST_COMPLETE_RAID_BATTLE = 8,
            QUEST_COMPLETE_QUEST = 9,
            QUEST_TRANSFER_POKEMON = 10,
            QUEST_FAVORITE_POKEMON = 11,
            QUEST_AUTOCOMPLETE = 12,
            QUEST_USE_BERRY_IN_ENCOUNTER = 13,
            QUEST_UPGRADE_POKEMON = 14,
            QUEST_EVOLVE_POKEMON = 15,
            QUEST_LAND_THROW = 16,
            QUEST_GET_BUDDY_CANDY = 17,
            QUEST_BADGE_RANK = 18,
            QUEST_PLAYER_LEVEL = 19
        }

        enum RaidLevel {
            RAID_LEVEL_UNSET = 0,
            RAID_LEVEL_1 = 1,
            RAID_LEVEL_2 = 2,
            RAID_LEVEL_3 = 3,
            RAID_LEVEL_4 = 4,
            RAID_LEVEL_5 = 5
        }

        enum Slot {
            UNSET_SLOT = 0,
            HAIR = 1,
            SHIRT = 2,
            PANTS = 3,
            HAT = 4,
            SHOES = 5,
            EYES = 6,
            BACKPACK = 7,
            GLOVES = 8,
            SOCKS = 9,
            BELT = 10,
            GLASSES = 11,
            NECKLACE = 12
        }

        enum TeamColor {
            NEUTRAL = 0,
            BLUE = 1,
            RED = 2,
            YELLOW = 3
        }

        enum TutorialState {
            LEGAL_SCREEN = 0,
            AVATAR_SELECTION = 1,
            ACCOUNT_CREATION = 2,
            POKEMON_CAPTURE = 3,
            NAME_SELECTION = 4,
            POKEMON_BERRY = 5,
            USE_ITEM = 6,
            FIRST_TIME_EXPERIENCE_COMPLETE = 7,
            POKESTOP_TUTORIAL = 8,
            GYM_TUTORIAL = 9,
            CHALLENGE_QUEST_TUTORIAL = 10
        }

        enum VariableName {
            UNSET_VariableName = 0,
            CODE_NAME = 1,
            TEAM = 2,
            LEVEL = 3,
            EXPERIENCE = 4,
            POKECOIN_BALANCE = 5,
            STARDUST_BALANCE = 6,
            EMAIL = 7,
            LOGIN_METHOD = 8,
            GYM_ID = 1000,
            GYM_NAME = 1001,
            POKEMON_DISPLAY = 1002,
            POKEDEX_ENTRY_NUMBER = 1003,
            POKEMON_ID = 1004,
            POKEMON_NICKNAME = 1005,
            GYM_BADGE_EARNED_POINTS = 1006,
            GYM_BADGE_PROGRESS = 1007,
            GYM_BADGE_RANK = 1008,
            GYM_BADGE_IMAGE_URL = 1009,
            GYM_BADGE_LEVEL_UP = 1010,
            POKECOIN_AWARDED = 1011,
            POKECOIN_AWARDED_TODAY = 1012,
            MAX_DAILY_POKECOIN = 1013,
            BATTLES_WON = 1014,
            BATTLES_LOST = 1015,
            DEPLOYED_MILLIS = 1016,
            RAID_SEED = 1017
        }

        enum WeatherCondition {
            NONE = 0,
            CLEAR = 1,
            RAINY = 2,
            PARTLY_CLOUDY = 3,
            OVERCAST = 4,
            WINDY = 5,
            SNOW = 6,
            FOG = 7
        }
    }

    namespace Inventory {

        interface IAppliedItem {
            item_id?: (POGOProtos.Inventory.Item.ItemId|null);
            item_type?: (POGOProtos.Inventory.Item.ItemType|null);
            expire_ms?: (number|Long|null);
            applied_ms?: (number|Long|null);
        }

        class AppliedItem implements IAppliedItem {
            constructor(properties?: POGOProtos.Inventory.IAppliedItem);
            public item_id: POGOProtos.Inventory.Item.ItemId;
            public item_type: POGOProtos.Inventory.Item.ItemType;
            public expire_ms: (number|Long);
            public applied_ms: (number|Long);
            public static create(properties?: POGOProtos.Inventory.IAppliedItem): POGOProtos.Inventory.AppliedItem;
            public static encode(message: POGOProtos.Inventory.IAppliedItem, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: POGOProtos.Inventory.IAppliedItem, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Inventory.AppliedItem;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Inventory.AppliedItem;
            public static fromObject(object: { [k: string]: any }): POGOProtos.Inventory.AppliedItem;
            public static toObject(message: POGOProtos.Inventory.AppliedItem, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IAppliedItems {
            item?: (POGOProtos.Inventory.IAppliedItem[]|null);
        }

        class AppliedItems implements IAppliedItems {
            constructor(properties?: POGOProtos.Inventory.IAppliedItems);
            public item: POGOProtos.Inventory.IAppliedItem[];
            public static create(properties?: POGOProtos.Inventory.IAppliedItems): POGOProtos.Inventory.AppliedItems;
            public static encode(message: POGOProtos.Inventory.IAppliedItems, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: POGOProtos.Inventory.IAppliedItems, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Inventory.AppliedItems;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Inventory.AppliedItems;
            public static fromObject(object: { [k: string]: any }): POGOProtos.Inventory.AppliedItems;
            public static toObject(message: POGOProtos.Inventory.AppliedItems, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface ICandy {
            family_id?: (POGOProtos.Enums.PokemonFamilyId|null);
            candy?: (number|null);
        }

        class Candy implements ICandy {
            constructor(properties?: POGOProtos.Inventory.ICandy);
            public family_id: POGOProtos.Enums.PokemonFamilyId;
            public candy: number;
            public static create(properties?: POGOProtos.Inventory.ICandy): POGOProtos.Inventory.Candy;
            public static encode(message: POGOProtos.Inventory.ICandy, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: POGOProtos.Inventory.ICandy, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Inventory.Candy;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Inventory.Candy;
            public static fromObject(object: { [k: string]: any }): POGOProtos.Inventory.Candy;
            public static toObject(message: POGOProtos.Inventory.Candy, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IEggIncubator {
            id?: (string|null);
            item_id?: (POGOProtos.Inventory.Item.ItemId|null);
            incubator_type?: (POGOProtos.Inventory.EggIncubatorType|null);
            uses_remaining?: (number|null);
            pokemon_id?: (number|Long|null);
            start_km_walked?: (number|null);
            target_km_walked?: (number|null);
        }

        class EggIncubator implements IEggIncubator {
            constructor(properties?: POGOProtos.Inventory.IEggIncubator);
            public id: string;
            public item_id: POGOProtos.Inventory.Item.ItemId;
            public incubator_type: POGOProtos.Inventory.EggIncubatorType;
            public uses_remaining: number;
            public pokemon_id: (number|Long);
            public start_km_walked: number;
            public target_km_walked: number;
            public static create(properties?: POGOProtos.Inventory.IEggIncubator): POGOProtos.Inventory.EggIncubator;
            public static encode(message: POGOProtos.Inventory.IEggIncubator, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: POGOProtos.Inventory.IEggIncubator, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Inventory.EggIncubator;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Inventory.EggIncubator;
            public static fromObject(object: { [k: string]: any }): POGOProtos.Inventory.EggIncubator;
            public static toObject(message: POGOProtos.Inventory.EggIncubator, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IEggIncubators {
            egg_incubator?: (POGOProtos.Inventory.IEggIncubator[]|null);
        }

        class EggIncubators implements IEggIncubators {
            constructor(properties?: POGOProtos.Inventory.IEggIncubators);
            public egg_incubator: POGOProtos.Inventory.IEggIncubator[];
            public static create(properties?: POGOProtos.Inventory.IEggIncubators): POGOProtos.Inventory.EggIncubators;
            public static encode(message: POGOProtos.Inventory.IEggIncubators, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: POGOProtos.Inventory.IEggIncubators, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Inventory.EggIncubators;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Inventory.EggIncubators;
            public static fromObject(object: { [k: string]: any }): POGOProtos.Inventory.EggIncubators;
            public static toObject(message: POGOProtos.Inventory.EggIncubators, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        enum EggIncubatorType {
            INCUBATOR_UNSET = 0,
            INCUBATOR_DISTANCE = 1
        }

        interface IExclusiveTicketInfo {
            raid_seed?: (number|Long|null);
            fort_id?: (string|null);
            start_time_ms?: (number|Long|null);
            end_time_ms?: (number|Long|null);
            image_url?: (string|null);
            latitude?: (number|null);
            longitude?: (number|null);
            gym_name?: (string|null);
            spawn_time_ms?: (number|Long|null);
            is_cancelled?: (boolean|null);
            raid_pokemon?: (POGOProtos.Data.IPokemonData|null);
        }

        class ExclusiveTicketInfo implements IExclusiveTicketInfo {
            constructor(properties?: POGOProtos.Inventory.IExclusiveTicketInfo);
            public raid_seed: (number|Long);
            public fort_id: string;
            public start_time_ms: (number|Long);
            public end_time_ms: (number|Long);
            public image_url: string;
            public latitude: number;
            public longitude: number;
            public gym_name: string;
            public spawn_time_ms: (number|Long);
            public is_cancelled: boolean;
            public raid_pokemon?: (POGOProtos.Data.IPokemonData|null);
            public static create(properties?: POGOProtos.Inventory.IExclusiveTicketInfo): POGOProtos.Inventory.ExclusiveTicketInfo;
            public static encode(message: POGOProtos.Inventory.IExclusiveTicketInfo, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: POGOProtos.Inventory.IExclusiveTicketInfo, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Inventory.ExclusiveTicketInfo;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Inventory.ExclusiveTicketInfo;
            public static fromObject(object: { [k: string]: any }): POGOProtos.Inventory.ExclusiveTicketInfo;
            public static toObject(message: POGOProtos.Inventory.ExclusiveTicketInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IInventoryDelta {
            original_timestamp_ms?: (number|Long|null);
            new_timestamp_ms?: (number|Long|null);
            inventory_items?: (POGOProtos.Inventory.IInventoryItem[]|null);
        }

        class InventoryDelta implements IInventoryDelta {
            constructor(properties?: POGOProtos.Inventory.IInventoryDelta);
            public original_timestamp_ms: (number|Long);
            public new_timestamp_ms: (number|Long);
            public inventory_items: POGOProtos.Inventory.IInventoryItem[];
            public static create(properties?: POGOProtos.Inventory.IInventoryDelta): POGOProtos.Inventory.InventoryDelta;
            public static encode(message: POGOProtos.Inventory.IInventoryDelta, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: POGOProtos.Inventory.IInventoryDelta, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Inventory.InventoryDelta;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Inventory.InventoryDelta;
            public static fromObject(object: { [k: string]: any }): POGOProtos.Inventory.InventoryDelta;
            public static toObject(message: POGOProtos.Inventory.InventoryDelta, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IInventoryItem {
            modified_timestamp_ms?: (number|Long|null);
            deleted_item?: (POGOProtos.Inventory.InventoryItem.IDeletedItem|null);
            inventory_item_data?: (POGOProtos.Inventory.IInventoryItemData|null);
        }

        class InventoryItem implements IInventoryItem {
            constructor(properties?: POGOProtos.Inventory.IInventoryItem);
            public modified_timestamp_ms: (number|Long);
            public deleted_item?: (POGOProtos.Inventory.InventoryItem.IDeletedItem|null);
            public inventory_item_data?: (POGOProtos.Inventory.IInventoryItemData|null);
            public static create(properties?: POGOProtos.Inventory.IInventoryItem): POGOProtos.Inventory.InventoryItem;
            public static encode(message: POGOProtos.Inventory.IInventoryItem, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: POGOProtos.Inventory.IInventoryItem, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Inventory.InventoryItem;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Inventory.InventoryItem;
            public static fromObject(object: { [k: string]: any }): POGOProtos.Inventory.InventoryItem;
            public static toObject(message: POGOProtos.Inventory.InventoryItem, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        namespace InventoryItem {

            interface IDeletedItem {
                pokemon_id?: (number|Long|null);
            }

            class DeletedItem implements IDeletedItem {
                constructor(properties?: POGOProtos.Inventory.InventoryItem.IDeletedItem);
                public pokemon_id: (number|Long);
                public static create(properties?: POGOProtos.Inventory.InventoryItem.IDeletedItem): POGOProtos.Inventory.InventoryItem.DeletedItem;
                public static encode(message: POGOProtos.Inventory.InventoryItem.IDeletedItem, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Inventory.InventoryItem.IDeletedItem, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Inventory.InventoryItem.DeletedItem;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Inventory.InventoryItem.DeletedItem;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Inventory.InventoryItem.DeletedItem;
                public static toObject(message: POGOProtos.Inventory.InventoryItem.DeletedItem, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }
        }

        interface IInventoryItemData {
            pokemon_data?: (POGOProtos.Data.IPokemonData|null);
            item?: (POGOProtos.Inventory.Item.IItemData|null);
            pokedex_entry?: (POGOProtos.Data.IPokedexEntry|null);
            player_stats?: (POGOProtos.Data.Player.IPlayerStats|null);
            player_currency?: (POGOProtos.Data.Player.IPlayerCurrency|null);
            player_camera?: (POGOProtos.Data.Player.IPlayerCamera|null);
            inventory_upgrades?: (POGOProtos.Inventory.IInventoryUpgrades|null);
            applied_items?: (POGOProtos.Inventory.IAppliedItems|null);
            egg_incubators?: (POGOProtos.Inventory.IEggIncubators|null);
            candy?: (POGOProtos.Inventory.ICandy|null);
            quest?: (POGOProtos.Data.Quests.IQuest|null);
            avatar_item?: (POGOProtos.Data.Avatar.IAvatarItem|null);
            raid_tickets?: (POGOProtos.Inventory.IRaidTickets|null);
            quests?: (POGOProtos.Data.Quests.IQuests|null);
        }

        class InventoryItemData implements IInventoryItemData {
            constructor(properties?: POGOProtos.Inventory.IInventoryItemData);
            public pokemon_data?: (POGOProtos.Data.IPokemonData|null);
            public item?: (POGOProtos.Inventory.Item.IItemData|null);
            public pokedex_entry?: (POGOProtos.Data.IPokedexEntry|null);
            public player_stats?: (POGOProtos.Data.Player.IPlayerStats|null);
            public player_currency?: (POGOProtos.Data.Player.IPlayerCurrency|null);
            public player_camera?: (POGOProtos.Data.Player.IPlayerCamera|null);
            public inventory_upgrades?: (POGOProtos.Inventory.IInventoryUpgrades|null);
            public applied_items?: (POGOProtos.Inventory.IAppliedItems|null);
            public egg_incubators?: (POGOProtos.Inventory.IEggIncubators|null);
            public candy?: (POGOProtos.Inventory.ICandy|null);
            public quest?: (POGOProtos.Data.Quests.IQuest|null);
            public avatar_item?: (POGOProtos.Data.Avatar.IAvatarItem|null);
            public raid_tickets?: (POGOProtos.Inventory.IRaidTickets|null);
            public quests?: (POGOProtos.Data.Quests.IQuests|null);
            public static create(properties?: POGOProtos.Inventory.IInventoryItemData): POGOProtos.Inventory.InventoryItemData;
            public static encode(message: POGOProtos.Inventory.IInventoryItemData, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: POGOProtos.Inventory.IInventoryItemData, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Inventory.InventoryItemData;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Inventory.InventoryItemData;
            public static fromObject(object: { [k: string]: any }): POGOProtos.Inventory.InventoryItemData;
            public static toObject(message: POGOProtos.Inventory.InventoryItemData, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IInventoryKey {
            pokemon_id?: (number|Long|null);
            item?: (POGOProtos.Inventory.Item.ItemId|null);
            pokedex_entry_id?: (number|null);
            player_stats?: (boolean|null);
            player_currency?: (boolean|null);
            player_camera?: (boolean|null);
            inventory_upgrades?: (boolean|null);
            applied_items?: (boolean|null);
            egg_incubators?: (boolean|null);
            pokemon_family_id?: (POGOProtos.Enums.PokemonFamilyId|null);
            quest_type?: (POGOProtos.Enums.QuestType|null);
            avatar_template_id?: (string|null);
            raid_tickets?: (boolean|null);
            quests?: (boolean|null);
        }

        class InventoryKey implements IInventoryKey {
            constructor(properties?: POGOProtos.Inventory.IInventoryKey);
            public pokemon_id: (number|Long);
            public item: POGOProtos.Inventory.Item.ItemId;
            public pokedex_entry_id: number;
            public player_stats: boolean;
            public player_currency: boolean;
            public player_camera: boolean;
            public inventory_upgrades: boolean;
            public applied_items: boolean;
            public egg_incubators: boolean;
            public pokemon_family_id: POGOProtos.Enums.PokemonFamilyId;
            public quest_type: POGOProtos.Enums.QuestType;
            public avatar_template_id: string;
            public raid_tickets: boolean;
            public quests: boolean;
            public static create(properties?: POGOProtos.Inventory.IInventoryKey): POGOProtos.Inventory.InventoryKey;
            public static encode(message: POGOProtos.Inventory.IInventoryKey, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: POGOProtos.Inventory.IInventoryKey, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Inventory.InventoryKey;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Inventory.InventoryKey;
            public static fromObject(object: { [k: string]: any }): POGOProtos.Inventory.InventoryKey;
            public static toObject(message: POGOProtos.Inventory.InventoryKey, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IInventoryUpgrade {
            item_id?: (POGOProtos.Inventory.Item.ItemId|null);
            upgrade_type?: (POGOProtos.Inventory.InventoryUpgradeType|null);
            additional_storage?: (number|null);
        }

        class InventoryUpgrade implements IInventoryUpgrade {
            constructor(properties?: POGOProtos.Inventory.IInventoryUpgrade);
            public item_id: POGOProtos.Inventory.Item.ItemId;
            public upgrade_type: POGOProtos.Inventory.InventoryUpgradeType;
            public additional_storage: number;
            public static create(properties?: POGOProtos.Inventory.IInventoryUpgrade): POGOProtos.Inventory.InventoryUpgrade;
            public static encode(message: POGOProtos.Inventory.IInventoryUpgrade, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: POGOProtos.Inventory.IInventoryUpgrade, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Inventory.InventoryUpgrade;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Inventory.InventoryUpgrade;
            public static fromObject(object: { [k: string]: any }): POGOProtos.Inventory.InventoryUpgrade;
            public static toObject(message: POGOProtos.Inventory.InventoryUpgrade, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IInventoryUpgrades {
            inventory_upgrades?: (POGOProtos.Inventory.IInventoryUpgrade[]|null);
        }

        class InventoryUpgrades implements IInventoryUpgrades {
            constructor(properties?: POGOProtos.Inventory.IInventoryUpgrades);
            public inventory_upgrades: POGOProtos.Inventory.IInventoryUpgrade[];
            public static create(properties?: POGOProtos.Inventory.IInventoryUpgrades): POGOProtos.Inventory.InventoryUpgrades;
            public static encode(message: POGOProtos.Inventory.IInventoryUpgrades, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: POGOProtos.Inventory.IInventoryUpgrades, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Inventory.InventoryUpgrades;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Inventory.InventoryUpgrades;
            public static fromObject(object: { [k: string]: any }): POGOProtos.Inventory.InventoryUpgrades;
            public static toObject(message: POGOProtos.Inventory.InventoryUpgrades, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        enum InventoryUpgradeType {
            UPGRADE_UNSET = 0,
            INCREASE_ITEM_STORAGE = 1,
            INCREASE_POKEMON_STORAGE = 2
        }

        namespace Item {

            interface IItemAward {
                item_id?: (POGOProtos.Inventory.Item.ItemId|null);
                item_count?: (number|null);
                bonus_count?: (number|null);
            }

            class ItemAward implements IItemAward {
                constructor(properties?: POGOProtos.Inventory.Item.IItemAward);
                public item_id: POGOProtos.Inventory.Item.ItemId;
                public item_count: number;
                public bonus_count: number;
                public static create(properties?: POGOProtos.Inventory.Item.IItemAward): POGOProtos.Inventory.Item.ItemAward;
                public static encode(message: POGOProtos.Inventory.Item.IItemAward, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Inventory.Item.IItemAward, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Inventory.Item.ItemAward;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Inventory.Item.ItemAward;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Inventory.Item.ItemAward;
                public static toObject(message: POGOProtos.Inventory.Item.ItemAward, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IItemData {
                item_id?: (POGOProtos.Inventory.Item.ItemId|null);
                count?: (number|null);
                unseen?: (boolean|null);
            }

            class ItemData implements IItemData {
                constructor(properties?: POGOProtos.Inventory.Item.IItemData);
                public item_id: POGOProtos.Inventory.Item.ItemId;
                public count: number;
                public unseen: boolean;
                public static create(properties?: POGOProtos.Inventory.Item.IItemData): POGOProtos.Inventory.Item.ItemData;
                public static encode(message: POGOProtos.Inventory.Item.IItemData, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Inventory.Item.IItemData, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Inventory.Item.ItemData;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Inventory.Item.ItemData;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Inventory.Item.ItemData;
                public static toObject(message: POGOProtos.Inventory.Item.ItemData, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            enum ItemId {
                ITEM_UNKNOWN = 0,
                ITEM_POKE_BALL = 1,
                ITEM_GREAT_BALL = 2,
                ITEM_ULTRA_BALL = 3,
                ITEM_MASTER_BALL = 4,
                ITEM_PREMIER_BALL = 5,
                ITEM_POTION = 101,
                ITEM_SUPER_POTION = 102,
                ITEM_HYPER_POTION = 103,
                ITEM_MAX_POTION = 104,
                ITEM_REVIVE = 201,
                ITEM_MAX_REVIVE = 202,
                ITEM_LUCKY_EGG = 301,
                ITEM_INCENSE_ORDINARY = 401,
                ITEM_INCENSE_SPICY = 402,
                ITEM_INCENSE_COOL = 403,
                ITEM_INCENSE_FLORAL = 404,
                ITEM_TROY_DISK = 501,
                ITEM_X_ATTACK = 602,
                ITEM_X_DEFENSE = 603,
                ITEM_X_MIRACLE = 604,
                ITEM_RAZZ_BERRY = 701,
                ITEM_BLUK_BERRY = 702,
                ITEM_NANAB_BERRY = 703,
                ITEM_WEPAR_BERRY = 704,
                ITEM_PINAP_BERRY = 705,
                ITEM_GOLDEN_RAZZ_BERRY = 706,
                ITEM_GOLDEN_NANAB_BERRY = 707,
                ITEM_GOLDEN_PINAP_BERRY = 708,
                ITEM_SPECIAL_CAMERA = 801,
                ITEM_INCUBATOR_BASIC_UNLIMITED = 901,
                ITEM_INCUBATOR_BASIC = 902,
                ITEM_INCUBATOR_SUPER = 903,
                ITEM_POKEMON_STORAGE_UPGRADE = 1001,
                ITEM_ITEM_STORAGE_UPGRADE = 1002,
                ITEM_SUN_STONE = 1101,
                ITEM_KINGS_ROCK = 1102,
                ITEM_METAL_COAT = 1103,
                ITEM_DRAGON_SCALE = 1104,
                ITEM_UP_GRADE = 1105,
                ITEM_MOVE_REROLL_FAST_ATTACK = 1201,
                ITEM_MOVE_REROLL_SPECIAL_ATTACK = 1202,
                ITEM_RARE_CANDY = 1301,
                ITEM_FREE_RAID_TICKET = 1401,
                ITEM_PAID_RAID_TICKET = 1402,
                ITEM_LEGENDARY_RAID_TICKET = 1403,
                ITEM_STAR_PIECE = 1404
            }

            enum ItemType {
                ITEM_TYPE_NONE = 0,
                ITEM_TYPE_POKEBALL = 1,
                ITEM_TYPE_POTION = 2,
                ITEM_TYPE_REVIVE = 3,
                ITEM_TYPE_MAP = 4,
                ITEM_TYPE_BATTLE = 5,
                ITEM_TYPE_FOOD = 6,
                ITEM_TYPE_CAMERA = 7,
                ITEM_TYPE_DISK = 8,
                ITEM_TYPE_INCUBATOR = 9,
                ITEM_TYPE_INCENSE = 10,
                ITEM_TYPE_XP_BOOST = 11,
                ITEM_TYPE_INVENTORY_UPGRADE = 12,
                ITEM_TYPE_EVOLUTION_REQUIREMENT = 13,
                ITEM_TYPE_MOVE_REROLL = 14,
                ITEM_TYPE_CANDY = 15,
                ITEM_TYPE_RAID_TICKET = 16,
                ITEM_TYPE_STARDUST_BOOST = 17
            }
        }

        interface ILoot {
            loot_item?: (POGOProtos.Inventory.ILootItem[]|null);
        }

        class Loot implements ILoot {
            constructor(properties?: POGOProtos.Inventory.ILoot);
            public loot_item: POGOProtos.Inventory.ILootItem[];
            public static create(properties?: POGOProtos.Inventory.ILoot): POGOProtos.Inventory.Loot;
            public static encode(message: POGOProtos.Inventory.ILoot, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: POGOProtos.Inventory.ILoot, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Inventory.Loot;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Inventory.Loot;
            public static fromObject(object: { [k: string]: any }): POGOProtos.Inventory.Loot;
            public static toObject(message: POGOProtos.Inventory.Loot, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface ILootItem {
            item?: (POGOProtos.Inventory.Item.ItemId|null);
            stardust?: (boolean|null);
            pokecoin?: (boolean|null);
            pokemon_candy?: (POGOProtos.Enums.PokemonId|null);
            count?: (number|null);
            experience?: (boolean|null);
        }

        class LootItem implements ILootItem {
            constructor(properties?: POGOProtos.Inventory.ILootItem);
            public item: POGOProtos.Inventory.Item.ItemId;
            public stardust: boolean;
            public pokecoin: boolean;
            public pokemon_candy: POGOProtos.Enums.PokemonId;
            public count: number;
            public experience: boolean;
            public static create(properties?: POGOProtos.Inventory.ILootItem): POGOProtos.Inventory.LootItem;
            public static encode(message: POGOProtos.Inventory.ILootItem, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: POGOProtos.Inventory.ILootItem, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Inventory.LootItem;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Inventory.LootItem;
            public static fromObject(object: { [k: string]: any }): POGOProtos.Inventory.LootItem;
            public static toObject(message: POGOProtos.Inventory.LootItem, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IRaidTicket {
            ticket_id?: (string|null);
            item?: (POGOProtos.Inventory.Item.ItemId|null);
            exclusive_info?: (POGOProtos.Inventory.IExclusiveTicketInfo|null);
        }

        class RaidTicket implements IRaidTicket {
            constructor(properties?: POGOProtos.Inventory.IRaidTicket);
            public ticket_id: string;
            public item: POGOProtos.Inventory.Item.ItemId;
            public exclusive_info?: (POGOProtos.Inventory.IExclusiveTicketInfo|null);
            public static create(properties?: POGOProtos.Inventory.IRaidTicket): POGOProtos.Inventory.RaidTicket;
            public static encode(message: POGOProtos.Inventory.IRaidTicket, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: POGOProtos.Inventory.IRaidTicket, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Inventory.RaidTicket;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Inventory.RaidTicket;
            public static fromObject(object: { [k: string]: any }): POGOProtos.Inventory.RaidTicket;
            public static toObject(message: POGOProtos.Inventory.RaidTicket, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IRaidTickets {
            raid_ticket?: (POGOProtos.Inventory.IRaidTicket[]|null);
        }

        class RaidTickets implements IRaidTickets {
            constructor(properties?: POGOProtos.Inventory.IRaidTickets);
            public raid_ticket: POGOProtos.Inventory.IRaidTicket[];
            public static create(properties?: POGOProtos.Inventory.IRaidTickets): POGOProtos.Inventory.RaidTickets;
            public static encode(message: POGOProtos.Inventory.IRaidTickets, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: POGOProtos.Inventory.IRaidTickets, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Inventory.RaidTickets;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Inventory.RaidTickets;
            public static fromObject(object: { [k: string]: any }): POGOProtos.Inventory.RaidTickets;
            public static toObject(message: POGOProtos.Inventory.RaidTickets, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }
    }

    namespace Map {

        namespace Fort {

            interface IFortData {
                id?: (string|null);
                last_modified_timestamp_ms?: (number|Long|null);
                latitude?: (number|null);
                longitude?: (number|null);
                owned_by_team?: (POGOProtos.Enums.TeamColor|null);
                guard_pokemon_id?: (POGOProtos.Enums.PokemonId|null);
                guard_pokemon_cp?: (number|null);
                enabled?: (boolean|null);
                type?: (POGOProtos.Map.Fort.FortType|null);
                gym_points?: (number|Long|null);
                is_in_battle?: (boolean|null);
                active_fort_modifier?: (POGOProtos.Inventory.Item.ItemId[]|null);
                lure_info?: (POGOProtos.Map.Fort.IFortLureInfo|null);
                cooldown_complete_timestamp_ms?: (number|Long|null);
                sponsor?: (POGOProtos.Map.Fort.FortSponsor|null);
                rendering_type?: (POGOProtos.Map.Fort.FortRenderingType|null);
                deploy_lockout_end_ms?: (number|Long|null);
                guard_pokemon_display?: (POGOProtos.Data.IPokemonDisplay|null);
                closed?: (boolean|null);
                raid_info?: (POGOProtos.Data.Raid.IRaidInfo|null);
                gym_display?: (POGOProtos.Map.Fort.IGymDisplay|null);
                visited?: (boolean|null);
                same_team_deploy_lockout_end_ms?: (number|Long|null);
                allow_checkin?: (boolean|null);
                image_url?: (string|null);
                in_event?: (boolean|null);
                banner_url?: (string|null);
                partner_id?: (string|null);
                challenge_quest_completed?: (boolean|null);
            }

            class FortData implements IFortData {
                constructor(properties?: POGOProtos.Map.Fort.IFortData);
                public id: string;
                public last_modified_timestamp_ms: (number|Long);
                public latitude: number;
                public longitude: number;
                public owned_by_team: POGOProtos.Enums.TeamColor;
                public guard_pokemon_id: POGOProtos.Enums.PokemonId;
                public guard_pokemon_cp: number;
                public enabled: boolean;
                public type: POGOProtos.Map.Fort.FortType;
                public gym_points: (number|Long);
                public is_in_battle: boolean;
                public active_fort_modifier: POGOProtos.Inventory.Item.ItemId[];
                public lure_info?: (POGOProtos.Map.Fort.IFortLureInfo|null);
                public cooldown_complete_timestamp_ms: (number|Long);
                public sponsor: POGOProtos.Map.Fort.FortSponsor;
                public rendering_type: POGOProtos.Map.Fort.FortRenderingType;
                public deploy_lockout_end_ms: (number|Long);
                public guard_pokemon_display?: (POGOProtos.Data.IPokemonDisplay|null);
                public closed: boolean;
                public raid_info?: (POGOProtos.Data.Raid.IRaidInfo|null);
                public gym_display?: (POGOProtos.Map.Fort.IGymDisplay|null);
                public visited: boolean;
                public same_team_deploy_lockout_end_ms: (number|Long);
                public allow_checkin: boolean;
                public image_url: string;
                public in_event: boolean;
                public banner_url: string;
                public partner_id: string;
                public challenge_quest_completed: boolean;
                public static create(properties?: POGOProtos.Map.Fort.IFortData): POGOProtos.Map.Fort.FortData;
                public static encode(message: POGOProtos.Map.Fort.IFortData, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Map.Fort.IFortData, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Map.Fort.FortData;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Map.Fort.FortData;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Map.Fort.FortData;
                public static toObject(message: POGOProtos.Map.Fort.FortData, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IFortLureInfo {
                fort_id?: (string|null);
                encounter_id?: (number|Long|null);
                active_pokemon_id?: (POGOProtos.Enums.PokemonId|null);
                lure_expires_timestamp_ms?: (number|Long|null);
            }

            class FortLureInfo implements IFortLureInfo {
                constructor(properties?: POGOProtos.Map.Fort.IFortLureInfo);
                public fort_id: string;
                public encounter_id: (number|Long);
                public active_pokemon_id: POGOProtos.Enums.PokemonId;
                public lure_expires_timestamp_ms: (number|Long);
                public static create(properties?: POGOProtos.Map.Fort.IFortLureInfo): POGOProtos.Map.Fort.FortLureInfo;
                public static encode(message: POGOProtos.Map.Fort.IFortLureInfo, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Map.Fort.IFortLureInfo, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Map.Fort.FortLureInfo;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Map.Fort.FortLureInfo;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Map.Fort.FortLureInfo;
                public static toObject(message: POGOProtos.Map.Fort.FortLureInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IFortModifier {
                item_id?: (POGOProtos.Inventory.Item.ItemId|null);
                expiration_timestamp_ms?: (number|Long|null);
                deployer_player_codename?: (string|null);
            }

            class FortModifier implements IFortModifier {
                constructor(properties?: POGOProtos.Map.Fort.IFortModifier);
                public item_id: POGOProtos.Inventory.Item.ItemId;
                public expiration_timestamp_ms: (number|Long);
                public deployer_player_codename: string;
                public static create(properties?: POGOProtos.Map.Fort.IFortModifier): POGOProtos.Map.Fort.FortModifier;
                public static encode(message: POGOProtos.Map.Fort.IFortModifier, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Map.Fort.IFortModifier, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Map.Fort.FortModifier;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Map.Fort.FortModifier;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Map.Fort.FortModifier;
                public static toObject(message: POGOProtos.Map.Fort.FortModifier, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            enum FortRenderingType {
                DEFAULT = 0,
                INTERNAL_TEST = 1
            }

            enum FortSponsor {
                UNSET_SPONSOR = 0,
                MCDONALDS = 1,
                POKEMON_STORE = 2,
                TOHO = 3,
                SOFTBANK = 4,
                GLOBE = 5,
                SPATULA = 6,
                THERMOMETER = 7,
                KNIFE = 8,
                GRILL = 9,
                SMOKER = 10,
                PAN = 11,
                BBQ = 12,
                FRYER = 13,
                STEAMER = 14,
                HOOD = 15,
                SLOWCOOKER = 16,
                MIXER = 17,
                SCOOPER = 18,
                MUFFINTIN = 19,
                SALAMANDER = 20,
                PLANCHA = 21,
                NIA_OPS = 22,
                WHISK = 23
            }

            interface IFortSummary {
                fort_summary_id?: (string|null);
                last_modified_timestamp_ms?: (number|Long|null);
                latitude?: (number|null);
                longitude?: (number|null);
            }

            class FortSummary implements IFortSummary {
                constructor(properties?: POGOProtos.Map.Fort.IFortSummary);
                public fort_summary_id: string;
                public last_modified_timestamp_ms: (number|Long);
                public latitude: number;
                public longitude: number;
                public static create(properties?: POGOProtos.Map.Fort.IFortSummary): POGOProtos.Map.Fort.FortSummary;
                public static encode(message: POGOProtos.Map.Fort.IFortSummary, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Map.Fort.IFortSummary, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Map.Fort.FortSummary;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Map.Fort.FortSummary;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Map.Fort.FortSummary;
                public static toObject(message: POGOProtos.Map.Fort.FortSummary, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            enum FortType {
                GYM = 0,
                CHECKPOINT = 1
            }

            interface IGymDisplay {
                gym_event?: (POGOProtos.Map.Fort.IGymEvent[]|null);
                total_gym_cp?: (number|null);
                lowest_pokemon_motivation?: (number|null);
                slots_available?: (number|null);
                occupied_millis?: (number|Long|null);
            }

            class GymDisplay implements IGymDisplay {
                constructor(properties?: POGOProtos.Map.Fort.IGymDisplay);
                public gym_event: POGOProtos.Map.Fort.IGymEvent[];
                public total_gym_cp: number;
                public lowest_pokemon_motivation: number;
                public slots_available: number;
                public occupied_millis: (number|Long);
                public static create(properties?: POGOProtos.Map.Fort.IGymDisplay): POGOProtos.Map.Fort.GymDisplay;
                public static encode(message: POGOProtos.Map.Fort.IGymDisplay, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Map.Fort.IGymDisplay, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Map.Fort.GymDisplay;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Map.Fort.GymDisplay;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Map.Fort.GymDisplay;
                public static toObject(message: POGOProtos.Map.Fort.GymDisplay, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IGymEvent {
                trainer?: (string|null);
                timestamp_ms?: (number|Long|null);
                event?: (POGOProtos.Map.Fort.GymEvent.Event|null);
                pokedex_id?: (number|null);
                pokemon_id?: (number|Long|null);
            }

            class GymEvent implements IGymEvent {
                constructor(properties?: POGOProtos.Map.Fort.IGymEvent);
                public trainer: string;
                public timestamp_ms: (number|Long);
                public event: POGOProtos.Map.Fort.GymEvent.Event;
                public pokedex_id: number;
                public pokemon_id: (number|Long);
                public static create(properties?: POGOProtos.Map.Fort.IGymEvent): POGOProtos.Map.Fort.GymEvent;
                public static encode(message: POGOProtos.Map.Fort.IGymEvent, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Map.Fort.IGymEvent, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Map.Fort.GymEvent;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Map.Fort.GymEvent;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Map.Fort.GymEvent;
                public static toObject(message: POGOProtos.Map.Fort.GymEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace GymEvent {

                enum Event {
                    UNKNOWN = 0,
                    POKEMON_FED = 1,
                    POKEMON_DEPLOYED = 2,
                    POKEMON_RETURNED = 3,
                    BATTLE_WON = 4,
                    BATTLE_LOSS = 5,
                    RAID_STARTED = 6,
                    RAID_ENDED = 7,
                    GYM_NEUTRALIZED = 8
                }
            }
        }

        interface IMapCell {
            s2_cell_id?: (number|Long|null);
            current_timestamp_ms?: (number|Long|null);
            forts?: (POGOProtos.Map.Fort.IFortData[]|null);
            spawn_points?: (POGOProtos.Map.ISpawnPoint[]|null);
            deleted_objects?: (string[]|null);
            is_truncated_list?: (boolean|null);
            fort_summaries?: (POGOProtos.Map.Fort.IFortSummary[]|null);
            decimated_spawn_points?: (POGOProtos.Map.ISpawnPoint[]|null);
            wild_pokemons?: (POGOProtos.Map.Pokemon.IWildPokemon[]|null);
            catchable_pokemons?: (POGOProtos.Map.Pokemon.IMapPokemon[]|null);
            nearby_pokemons?: (POGOProtos.Map.Pokemon.INearbyPokemon[]|null);
        }

        class MapCell implements IMapCell {
            constructor(properties?: POGOProtos.Map.IMapCell);
            public s2_cell_id: (number|Long);
            public current_timestamp_ms: (number|Long);
            public forts: POGOProtos.Map.Fort.IFortData[];
            public spawn_points: POGOProtos.Map.ISpawnPoint[];
            public deleted_objects: string[];
            public is_truncated_list: boolean;
            public fort_summaries: POGOProtos.Map.Fort.IFortSummary[];
            public decimated_spawn_points: POGOProtos.Map.ISpawnPoint[];
            public wild_pokemons: POGOProtos.Map.Pokemon.IWildPokemon[];
            public catchable_pokemons: POGOProtos.Map.Pokemon.IMapPokemon[];
            public nearby_pokemons: POGOProtos.Map.Pokemon.INearbyPokemon[];
            public static create(properties?: POGOProtos.Map.IMapCell): POGOProtos.Map.MapCell;
            public static encode(message: POGOProtos.Map.IMapCell, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: POGOProtos.Map.IMapCell, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Map.MapCell;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Map.MapCell;
            public static fromObject(object: { [k: string]: any }): POGOProtos.Map.MapCell;
            public static toObject(message: POGOProtos.Map.MapCell, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        enum MapObjectsStatus {
            UNSET_STATUS = 0,
            SUCCESS = 1,
            LOCATION_UNSET = 2
        }

        namespace Pokemon {

            interface ILobbyPokemon {
                id?: (number|Long|null);
                pokedex_id?: (POGOProtos.Enums.PokemonId|null);
                cp?: (number|null);
                percent_health?: (number|null);
            }

            class LobbyPokemon implements ILobbyPokemon {
                constructor(properties?: POGOProtos.Map.Pokemon.ILobbyPokemon);
                public id: (number|Long);
                public pokedex_id: POGOProtos.Enums.PokemonId;
                public cp: number;
                public percent_health: number;
                public static create(properties?: POGOProtos.Map.Pokemon.ILobbyPokemon): POGOProtos.Map.Pokemon.LobbyPokemon;
                public static encode(message: POGOProtos.Map.Pokemon.ILobbyPokemon, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Map.Pokemon.ILobbyPokemon, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Map.Pokemon.LobbyPokemon;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Map.Pokemon.LobbyPokemon;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Map.Pokemon.LobbyPokemon;
                public static toObject(message: POGOProtos.Map.Pokemon.LobbyPokemon, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IMapPokemon {
                spawn_point_id?: (string|null);
                encounter_id?: (number|Long|null);
                pokemon_id?: (POGOProtos.Enums.PokemonId|null);
                expiration_timestamp_ms?: (number|Long|null);
                latitude?: (number|null);
                longitude?: (number|null);
                pokemon_display?: (POGOProtos.Data.IPokemonDisplay|null);
            }

            class MapPokemon implements IMapPokemon {
                constructor(properties?: POGOProtos.Map.Pokemon.IMapPokemon);
                public spawn_point_id: string;
                public encounter_id: (number|Long);
                public pokemon_id: POGOProtos.Enums.PokemonId;
                public expiration_timestamp_ms: (number|Long);
                public latitude: number;
                public longitude: number;
                public pokemon_display?: (POGOProtos.Data.IPokemonDisplay|null);
                public static create(properties?: POGOProtos.Map.Pokemon.IMapPokemon): POGOProtos.Map.Pokemon.MapPokemon;
                public static encode(message: POGOProtos.Map.Pokemon.IMapPokemon, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Map.Pokemon.IMapPokemon, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Map.Pokemon.MapPokemon;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Map.Pokemon.MapPokemon;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Map.Pokemon.MapPokemon;
                public static toObject(message: POGOProtos.Map.Pokemon.MapPokemon, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IMotivatedPokemon {
                pokemon?: (POGOProtos.Data.IPokemonData|null);
                deploy_ms?: (number|Long|null);
                cp_when_deployed?: (number|null);
                motivation_now?: (number|null);
                cp_now?: (number|null);
                berry_value?: (number|null);
                feed_cooldown_duration_millis?: (number|Long|null);
                food_value?: (POGOProtos.Data.IFoodValue[]|null);
            }

            class MotivatedPokemon implements IMotivatedPokemon {
                constructor(properties?: POGOProtos.Map.Pokemon.IMotivatedPokemon);
                public pokemon?: (POGOProtos.Data.IPokemonData|null);
                public deploy_ms: (number|Long);
                public cp_when_deployed: number;
                public motivation_now: number;
                public cp_now: number;
                public berry_value: number;
                public feed_cooldown_duration_millis: (number|Long);
                public food_value: POGOProtos.Data.IFoodValue[];
                public static create(properties?: POGOProtos.Map.Pokemon.IMotivatedPokemon): POGOProtos.Map.Pokemon.MotivatedPokemon;
                public static encode(message: POGOProtos.Map.Pokemon.IMotivatedPokemon, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Map.Pokemon.IMotivatedPokemon, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Map.Pokemon.MotivatedPokemon;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Map.Pokemon.MotivatedPokemon;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Map.Pokemon.MotivatedPokemon;
                public static toObject(message: POGOProtos.Map.Pokemon.MotivatedPokemon, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface INearbyPokemon {
                pokemon_id?: (POGOProtos.Enums.PokemonId|null);
                distance_in_meters?: (number|null);
                encounter_id?: (number|Long|null);
                fort_id?: (string|null);
                fort_image_url?: (string|null);
                pokemon_display?: (POGOProtos.Data.IPokemonDisplay|null);
            }

            class NearbyPokemon implements INearbyPokemon {
                constructor(properties?: POGOProtos.Map.Pokemon.INearbyPokemon);
                public pokemon_id: POGOProtos.Enums.PokemonId;
                public distance_in_meters: number;
                public encounter_id: (number|Long);
                public fort_id: string;
                public fort_image_url: string;
                public pokemon_display?: (POGOProtos.Data.IPokemonDisplay|null);
                public static create(properties?: POGOProtos.Map.Pokemon.INearbyPokemon): POGOProtos.Map.Pokemon.NearbyPokemon;
                public static encode(message: POGOProtos.Map.Pokemon.INearbyPokemon, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Map.Pokemon.INearbyPokemon, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Map.Pokemon.NearbyPokemon;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Map.Pokemon.NearbyPokemon;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Map.Pokemon.NearbyPokemon;
                public static toObject(message: POGOProtos.Map.Pokemon.NearbyPokemon, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IWildPokemon {
                encounter_id?: (number|Long|null);
                last_modified_timestamp_ms?: (number|Long|null);
                latitude?: (number|null);
                longitude?: (number|null);
                spawn_point_id?: (string|null);
                pokemon_data?: (POGOProtos.Data.IPokemonData|null);
                time_till_hidden_ms?: (number|null);
            }

            class WildPokemon implements IWildPokemon {
                constructor(properties?: POGOProtos.Map.Pokemon.IWildPokemon);
                public encounter_id: (number|Long);
                public last_modified_timestamp_ms: (number|Long);
                public latitude: number;
                public longitude: number;
                public spawn_point_id: string;
                public pokemon_data?: (POGOProtos.Data.IPokemonData|null);
                public time_till_hidden_ms: number;
                public static create(properties?: POGOProtos.Map.Pokemon.IWildPokemon): POGOProtos.Map.Pokemon.WildPokemon;
                public static encode(message: POGOProtos.Map.Pokemon.IWildPokemon, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Map.Pokemon.IWildPokemon, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Map.Pokemon.WildPokemon;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Map.Pokemon.WildPokemon;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Map.Pokemon.WildPokemon;
                public static toObject(message: POGOProtos.Map.Pokemon.WildPokemon, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }
        }

        interface ISpawnPoint {
            latitude?: (number|null);
            longitude?: (number|null);
        }

        class SpawnPoint implements ISpawnPoint {
            constructor(properties?: POGOProtos.Map.ISpawnPoint);
            public latitude: number;
            public longitude: number;
            public static create(properties?: POGOProtos.Map.ISpawnPoint): POGOProtos.Map.SpawnPoint;
            public static encode(message: POGOProtos.Map.ISpawnPoint, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: POGOProtos.Map.ISpawnPoint, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Map.SpawnPoint;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Map.SpawnPoint;
            public static fromObject(object: { [k: string]: any }): POGOProtos.Map.SpawnPoint;
            public static toObject(message: POGOProtos.Map.SpawnPoint, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        namespace Weather {

            interface IClientWeather {
                s2_cell_id?: (number|Long|null);
                display_weather?: (POGOProtos.Map.Weather.IDisplayWeather|null);
                gameplay_weather?: (POGOProtos.Map.Weather.IGameplayWeather|null);
                alerts?: (POGOProtos.Map.Weather.IWeatherAlert[]|null);
            }

            class ClientWeather implements IClientWeather {
                constructor(properties?: POGOProtos.Map.Weather.IClientWeather);
                public s2_cell_id: (number|Long);
                public display_weather?: (POGOProtos.Map.Weather.IDisplayWeather|null);
                public gameplay_weather?: (POGOProtos.Map.Weather.IGameplayWeather|null);
                public alerts: POGOProtos.Map.Weather.IWeatherAlert[];
                public static create(properties?: POGOProtos.Map.Weather.IClientWeather): POGOProtos.Map.Weather.ClientWeather;
                public static encode(message: POGOProtos.Map.Weather.IClientWeather, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Map.Weather.IClientWeather, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Map.Weather.ClientWeather;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Map.Weather.ClientWeather;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Map.Weather.ClientWeather;
                public static toObject(message: POGOProtos.Map.Weather.ClientWeather, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IDisplayWeather {
                cloud_level?: (POGOProtos.Map.Weather.DisplayWeather.DisplayLevel|null);
                rain_level?: (POGOProtos.Map.Weather.DisplayWeather.DisplayLevel|null);
                wind_level?: (POGOProtos.Map.Weather.DisplayWeather.DisplayLevel|null);
                snow_level?: (POGOProtos.Map.Weather.DisplayWeather.DisplayLevel|null);
                fog_level?: (POGOProtos.Map.Weather.DisplayWeather.DisplayLevel|null);
                wind_direction?: (number|null);
            }

            class DisplayWeather implements IDisplayWeather {
                constructor(properties?: POGOProtos.Map.Weather.IDisplayWeather);
                public cloud_level: POGOProtos.Map.Weather.DisplayWeather.DisplayLevel;
                public rain_level: POGOProtos.Map.Weather.DisplayWeather.DisplayLevel;
                public wind_level: POGOProtos.Map.Weather.DisplayWeather.DisplayLevel;
                public snow_level: POGOProtos.Map.Weather.DisplayWeather.DisplayLevel;
                public fog_level: POGOProtos.Map.Weather.DisplayWeather.DisplayLevel;
                public wind_direction: number;
                public static create(properties?: POGOProtos.Map.Weather.IDisplayWeather): POGOProtos.Map.Weather.DisplayWeather;
                public static encode(message: POGOProtos.Map.Weather.IDisplayWeather, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Map.Weather.IDisplayWeather, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Map.Weather.DisplayWeather;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Map.Weather.DisplayWeather;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Map.Weather.DisplayWeather;
                public static toObject(message: POGOProtos.Map.Weather.DisplayWeather, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace DisplayWeather {

                enum DisplayLevel {
                    LEVEL_0 = 0,
                    LEVEL_1 = 1,
                    LEVEL_2 = 2,
                    LEVEL_3 = 3
                }
            }

            interface IGameplayWeather {
                gameplay_condition?: (POGOProtos.Map.Weather.GameplayWeather.WeatherCondition|null);
            }

            class GameplayWeather implements IGameplayWeather {
                constructor(properties?: POGOProtos.Map.Weather.IGameplayWeather);
                public gameplay_condition: POGOProtos.Map.Weather.GameplayWeather.WeatherCondition;
                public static create(properties?: POGOProtos.Map.Weather.IGameplayWeather): POGOProtos.Map.Weather.GameplayWeather;
                public static encode(message: POGOProtos.Map.Weather.IGameplayWeather, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Map.Weather.IGameplayWeather, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Map.Weather.GameplayWeather;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Map.Weather.GameplayWeather;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Map.Weather.GameplayWeather;
                public static toObject(message: POGOProtos.Map.Weather.GameplayWeather, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace GameplayWeather {

                enum WeatherCondition {
                    NONE = 0,
                    CLEAR = 1,
                    RAINY = 2,
                    PARTLY_CLOUDY = 3,
                    OVERCAST = 4,
                    WINDY = 5,
                    SNOW = 6,
                    FOG = 7
                }
            }

            interface IWeatherAlert {
                severity?: (POGOProtos.Map.Weather.WeatherAlert.Severity|null);
                warn_weather?: (boolean|null);
            }

            class WeatherAlert implements IWeatherAlert {
                constructor(properties?: POGOProtos.Map.Weather.IWeatherAlert);
                public severity: POGOProtos.Map.Weather.WeatherAlert.Severity;
                public warn_weather: boolean;
                public static create(properties?: POGOProtos.Map.Weather.IWeatherAlert): POGOProtos.Map.Weather.WeatherAlert;
                public static encode(message: POGOProtos.Map.Weather.IWeatherAlert, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Map.Weather.IWeatherAlert, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Map.Weather.WeatherAlert;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Map.Weather.WeatherAlert;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Map.Weather.WeatherAlert;
                public static toObject(message: POGOProtos.Map.Weather.WeatherAlert, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace WeatherAlert {

                enum Severity {
                    NONE = 0,
                    MODERATE = 1,
                    EXTREME = 2
                }
            }
        }
    }

    namespace Networking {

        namespace Envelopes {

            interface IAuthTicket {
                start?: (Uint8Array|null);
                expire_timestamp_ms?: (number|Long|null);
                end?: (Uint8Array|null);
            }

            class AuthTicket implements IAuthTicket {
                constructor(properties?: POGOProtos.Networking.Envelopes.IAuthTicket);
                public start: Uint8Array;
                public expire_timestamp_ms: (number|Long);
                public end: Uint8Array;
                public static create(properties?: POGOProtos.Networking.Envelopes.IAuthTicket): POGOProtos.Networking.Envelopes.AuthTicket;
                public static encode(message: POGOProtos.Networking.Envelopes.IAuthTicket, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Envelopes.IAuthTicket, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Envelopes.AuthTicket;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Envelopes.AuthTicket;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Envelopes.AuthTicket;
                public static toObject(message: POGOProtos.Networking.Envelopes.AuthTicket, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IRequestEnvelope {
                status_code?: (number|null);
                request_id?: (number|Long|null);
                requests?: (POGOProtos.Networking.Requests.IRequest[]|null);
                platform_requests?: (POGOProtos.Networking.Envelopes.RequestEnvelope.IPlatformRequest[]|null);
                latitude?: (number|null);
                longitude?: (number|null);
                accuracy?: (number|null);
                auth_info?: (POGOProtos.Networking.Envelopes.RequestEnvelope.IAuthInfo|null);
                auth_ticket?: (POGOProtos.Networking.Envelopes.IAuthTicket|null);
                ms_since_last_locationfix?: (number|Long|null);
            }

            class RequestEnvelope implements IRequestEnvelope {
                constructor(properties?: POGOProtos.Networking.Envelopes.IRequestEnvelope);
                public status_code: number;
                public request_id: (number|Long);
                public requests: POGOProtos.Networking.Requests.IRequest[];
                public platform_requests: POGOProtos.Networking.Envelopes.RequestEnvelope.IPlatformRequest[];
                public latitude: number;
                public longitude: number;
                public accuracy: number;
                public auth_info?: (POGOProtos.Networking.Envelopes.RequestEnvelope.IAuthInfo|null);
                public auth_ticket?: (POGOProtos.Networking.Envelopes.IAuthTicket|null);
                public ms_since_last_locationfix: (number|Long);
                public static create(properties?: POGOProtos.Networking.Envelopes.IRequestEnvelope): POGOProtos.Networking.Envelopes.RequestEnvelope;
                public static encode(message: POGOProtos.Networking.Envelopes.IRequestEnvelope, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Envelopes.IRequestEnvelope, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Envelopes.RequestEnvelope;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Envelopes.RequestEnvelope;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Envelopes.RequestEnvelope;
                public static toObject(message: POGOProtos.Networking.Envelopes.RequestEnvelope, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace RequestEnvelope {

                interface IAuthInfo {
                    provider?: (string|null);
                    token?: (POGOProtos.Networking.Envelopes.RequestEnvelope.AuthInfo.IJWT|null);
                }

                class AuthInfo implements IAuthInfo {
                    constructor(properties?: POGOProtos.Networking.Envelopes.RequestEnvelope.IAuthInfo);
                    public provider: string;
                    public token?: (POGOProtos.Networking.Envelopes.RequestEnvelope.AuthInfo.IJWT|null);
                    public static create(properties?: POGOProtos.Networking.Envelopes.RequestEnvelope.IAuthInfo): POGOProtos.Networking.Envelopes.RequestEnvelope.AuthInfo;
                    public static encode(message: POGOProtos.Networking.Envelopes.RequestEnvelope.IAuthInfo, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Envelopes.RequestEnvelope.IAuthInfo, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Envelopes.RequestEnvelope.AuthInfo;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Envelopes.RequestEnvelope.AuthInfo;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Envelopes.RequestEnvelope.AuthInfo;
                    public static toObject(message: POGOProtos.Networking.Envelopes.RequestEnvelope.AuthInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                namespace AuthInfo {

                    interface IJWT {
                        contents?: (string|null);
                        unknown2?: (number|null);
                    }

                    class JWT implements IJWT {
                        constructor(properties?: POGOProtos.Networking.Envelopes.RequestEnvelope.AuthInfo.IJWT);
                        public contents: string;
                        public unknown2: number;
                        public static create(properties?: POGOProtos.Networking.Envelopes.RequestEnvelope.AuthInfo.IJWT): POGOProtos.Networking.Envelopes.RequestEnvelope.AuthInfo.JWT;
                        public static encode(message: POGOProtos.Networking.Envelopes.RequestEnvelope.AuthInfo.IJWT, writer?: $protobuf.Writer): $protobuf.Writer;
                        public static encodeDelimited(message: POGOProtos.Networking.Envelopes.RequestEnvelope.AuthInfo.IJWT, writer?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Envelopes.RequestEnvelope.AuthInfo.JWT;
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Envelopes.RequestEnvelope.AuthInfo.JWT;
                        public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Envelopes.RequestEnvelope.AuthInfo.JWT;
                        public static toObject(message: POGOProtos.Networking.Envelopes.RequestEnvelope.AuthInfo.JWT, options?: $protobuf.IConversionOptions): { [k: string]: any };
                        public toJSON(): { [k: string]: any };
                    }
                }

                interface IPlatformRequest {
                    type?: (POGOProtos.Networking.Platform.PlatformRequestType|null);
                    request_message?: (Uint8Array|null);
                }

                class PlatformRequest implements IPlatformRequest {
                    constructor(properties?: POGOProtos.Networking.Envelopes.RequestEnvelope.IPlatformRequest);
                    public type: POGOProtos.Networking.Platform.PlatformRequestType;
                    public request_message: Uint8Array;
                    public static create(properties?: POGOProtos.Networking.Envelopes.RequestEnvelope.IPlatformRequest): POGOProtos.Networking.Envelopes.RequestEnvelope.PlatformRequest;
                    public static encode(message: POGOProtos.Networking.Envelopes.RequestEnvelope.IPlatformRequest, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Envelopes.RequestEnvelope.IPlatformRequest, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Envelopes.RequestEnvelope.PlatformRequest;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Envelopes.RequestEnvelope.PlatformRequest;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Envelopes.RequestEnvelope.PlatformRequest;
                    public static toObject(message: POGOProtos.Networking.Envelopes.RequestEnvelope.PlatformRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }
            }

            interface IResponseEnvelope {
                status_code?: (POGOProtos.Networking.Envelopes.ResponseEnvelope.StatusCode|null);
                request_id?: (number|Long|null);
                api_url?: (string|null);
                platform_returns?: (POGOProtos.Networking.Envelopes.ResponseEnvelope.IPlatformResponse[]|null);
                auth_ticket?: (POGOProtos.Networking.Envelopes.IAuthTicket|null);
                returns?: (Uint8Array[]|null);
                error?: (string|null);
            }

            class ResponseEnvelope implements IResponseEnvelope {
                constructor(properties?: POGOProtos.Networking.Envelopes.IResponseEnvelope);
                public status_code: POGOProtos.Networking.Envelopes.ResponseEnvelope.StatusCode;
                public request_id: (number|Long);
                public api_url: string;
                public platform_returns: POGOProtos.Networking.Envelopes.ResponseEnvelope.IPlatformResponse[];
                public auth_ticket?: (POGOProtos.Networking.Envelopes.IAuthTicket|null);
                public returns: Uint8Array[];
                public error: string;
                public static create(properties?: POGOProtos.Networking.Envelopes.IResponseEnvelope): POGOProtos.Networking.Envelopes.ResponseEnvelope;
                public static encode(message: POGOProtos.Networking.Envelopes.IResponseEnvelope, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Envelopes.IResponseEnvelope, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Envelopes.ResponseEnvelope;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Envelopes.ResponseEnvelope;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Envelopes.ResponseEnvelope;
                public static toObject(message: POGOProtos.Networking.Envelopes.ResponseEnvelope, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace ResponseEnvelope {

                interface IPlatformResponse {
                    type?: (POGOProtos.Networking.Platform.PlatformRequestType|null);
                    response?: (Uint8Array|null);
                }

                class PlatformResponse implements IPlatformResponse {
                    constructor(properties?: POGOProtos.Networking.Envelopes.ResponseEnvelope.IPlatformResponse);
                    public type: POGOProtos.Networking.Platform.PlatformRequestType;
                    public response: Uint8Array;
                    public static create(properties?: POGOProtos.Networking.Envelopes.ResponseEnvelope.IPlatformResponse): POGOProtos.Networking.Envelopes.ResponseEnvelope.PlatformResponse;
                    public static encode(message: POGOProtos.Networking.Envelopes.ResponseEnvelope.IPlatformResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Envelopes.ResponseEnvelope.IPlatformResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Envelopes.ResponseEnvelope.PlatformResponse;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Envelopes.ResponseEnvelope.PlatformResponse;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Envelopes.ResponseEnvelope.PlatformResponse;
                    public static toObject(message: POGOProtos.Networking.Envelopes.ResponseEnvelope.PlatformResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                enum StatusCode {
                    UNKNOWN = 0,
                    OK = 1,
                    OK_RPC_URL_IN_RESPONSE = 2,
                    BAD_REQUEST = 3,
                    INVALID_REQUEST = 51,
                    INVALID_PLATFORM_REQUEST = 52,
                    REDIRECT = 53,
                    SESSION_INVALIDATED = 100,
                    INVALID_AUTH_TOKEN = 102
                }
            }

            interface ISignature {
                field1?: (POGOProtos.Networking.Envelopes.IUnknownMessage[]|null);
                timestamp_since_start?: (number|Long|null);
                field3?: (string|null);
                location_fix?: (POGOProtos.Networking.Envelopes.Signature.ILocationFix[]|null);
                gps_info?: (POGOProtos.Networking.Envelopes.Signature.IAndroidGpsInfo[]|null);
                field6?: (POGOProtos.Networking.Envelopes.IUnknownMessage[]|null);
                sensor_info?: (POGOProtos.Networking.Envelopes.Signature.ISensorInfo[]|null);
                device_info?: (POGOProtos.Networking.Envelopes.Signature.IDeviceInfo|null);
                activity_status?: (POGOProtos.Networking.Envelopes.Signature.IActivityStatus|null);
                location_hash1?: (number|null);
                field11?: (boolean|null);
                field12?: (boolean|null);
                field13?: (number|null);
                field14?: (number|null);
                field15?: (string|null);
                field16?: (number|null);
                field17?: (string|null);
                field18?: (string|null);
                field19?: (boolean|null);
                location_hash2?: (number|null);
                field21?: (boolean|null);
                session_hash?: (Uint8Array|null);
                timestamp?: (number|Long|null);
                request_hash?: ((number|Long)[]|null);
                unknown25?: (number|Long|null);
                unknown27?: (number|null);
            }

            class Signature implements ISignature {
                constructor(properties?: POGOProtos.Networking.Envelopes.ISignature);
                public field1: POGOProtos.Networking.Envelopes.IUnknownMessage[];
                public timestamp_since_start: (number|Long);
                public field3: string;
                public location_fix: POGOProtos.Networking.Envelopes.Signature.ILocationFix[];
                public gps_info: POGOProtos.Networking.Envelopes.Signature.IAndroidGpsInfo[];
                public field6: POGOProtos.Networking.Envelopes.IUnknownMessage[];
                public sensor_info: POGOProtos.Networking.Envelopes.Signature.ISensorInfo[];
                public device_info?: (POGOProtos.Networking.Envelopes.Signature.IDeviceInfo|null);
                public activity_status?: (POGOProtos.Networking.Envelopes.Signature.IActivityStatus|null);
                public location_hash1: number;
                public field11: boolean;
                public field12: boolean;
                public field13: number;
                public field14: number;
                public field15: string;
                public field16: number;
                public field17: string;
                public field18: string;
                public field19: boolean;
                public location_hash2: number;
                public field21: boolean;
                public session_hash: Uint8Array;
                public timestamp: (number|Long);
                public request_hash: (number|Long)[];
                public unknown25: (number|Long);
                public unknown27: number;
                public static create(properties?: POGOProtos.Networking.Envelopes.ISignature): POGOProtos.Networking.Envelopes.Signature;
                public static encode(message: POGOProtos.Networking.Envelopes.ISignature, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Envelopes.ISignature, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Envelopes.Signature;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Envelopes.Signature;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Envelopes.Signature;
                public static toObject(message: POGOProtos.Networking.Envelopes.Signature, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace Signature {

                interface ILocationFix {
                    provider?: (string|null);
                    timestamp_snapshot?: (number|Long|null);
                    altitude?: (number|null);
                    latitude?: (number|null);
                    longitude?: (number|null);
                    speed?: (number|null);
                    course?: (number|null);
                    horizontal_accuracy?: (number|null);
                    vertical_accuracy?: (number|null);
                    provider_status?: (number|Long|null);
                    floor?: (number|null);
                    location_type?: (number|Long|null);
                }

                class LocationFix implements ILocationFix {
                    constructor(properties?: POGOProtos.Networking.Envelopes.Signature.ILocationFix);
                    public provider: string;
                    public timestamp_snapshot: (number|Long);
                    public altitude: number;
                    public latitude: number;
                    public longitude: number;
                    public speed: number;
                    public course: number;
                    public horizontal_accuracy: number;
                    public vertical_accuracy: number;
                    public provider_status: (number|Long);
                    public floor: number;
                    public location_type: (number|Long);
                    public static create(properties?: POGOProtos.Networking.Envelopes.Signature.ILocationFix): POGOProtos.Networking.Envelopes.Signature.LocationFix;
                    public static encode(message: POGOProtos.Networking.Envelopes.Signature.ILocationFix, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Envelopes.Signature.ILocationFix, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Envelopes.Signature.LocationFix;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Envelopes.Signature.LocationFix;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Envelopes.Signature.LocationFix;
                    public static toObject(message: POGOProtos.Networking.Envelopes.Signature.LocationFix, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IAndroidGpsInfo {
                    time_to_fix?: (number|Long|null);
                    satellites_prn?: (number[]|null);
                    azimuth?: (number[]|null);
                    elevation?: (number[]|null);
                    snr?: (number[]|null);
                    has_almanac?: (boolean[]|null);
                    has_ephemeris?: (boolean[]|null);
                    used_in_fix?: (boolean[]|null);
                }

                class AndroidGpsInfo implements IAndroidGpsInfo {
                    constructor(properties?: POGOProtos.Networking.Envelopes.Signature.IAndroidGpsInfo);
                    public time_to_fix: (number|Long);
                    public satellites_prn: number[];
                    public azimuth: number[];
                    public elevation: number[];
                    public snr: number[];
                    public has_almanac: boolean[];
                    public has_ephemeris: boolean[];
                    public used_in_fix: boolean[];
                    public static create(properties?: POGOProtos.Networking.Envelopes.Signature.IAndroidGpsInfo): POGOProtos.Networking.Envelopes.Signature.AndroidGpsInfo;
                    public static encode(message: POGOProtos.Networking.Envelopes.Signature.IAndroidGpsInfo, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Envelopes.Signature.IAndroidGpsInfo, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Envelopes.Signature.AndroidGpsInfo;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Envelopes.Signature.AndroidGpsInfo;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Envelopes.Signature.AndroidGpsInfo;
                    public static toObject(message: POGOProtos.Networking.Envelopes.Signature.AndroidGpsInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface ISensorInfo {
                    timestamp_snapshot?: (number|Long|null);
                    linear_acceleration_x?: (number|null);
                    linear_acceleration_y?: (number|null);
                    linear_acceleration_z?: (number|null);
                    magnetic_field_x?: (number|null);
                    magnetic_field_y?: (number|null);
                    magnetic_field_z?: (number|null);
                    magnetic_field_accuracy?: (number|null);
                    attitude_pitch?: (number|null);
                    attitude_yaw?: (number|null);
                    attitude_roll?: (number|null);
                    rotation_rate_x?: (number|null);
                    rotation_rate_y?: (number|null);
                    rotation_rate_z?: (number|null);
                    gravity_x?: (number|null);
                    gravity_y?: (number|null);
                    gravity_z?: (number|null);
                    status?: (number|null);
                }

                class SensorInfo implements ISensorInfo {
                    constructor(properties?: POGOProtos.Networking.Envelopes.Signature.ISensorInfo);
                    public timestamp_snapshot: (number|Long);
                    public linear_acceleration_x: number;
                    public linear_acceleration_y: number;
                    public linear_acceleration_z: number;
                    public magnetic_field_x: number;
                    public magnetic_field_y: number;
                    public magnetic_field_z: number;
                    public magnetic_field_accuracy: number;
                    public attitude_pitch: number;
                    public attitude_yaw: number;
                    public attitude_roll: number;
                    public rotation_rate_x: number;
                    public rotation_rate_y: number;
                    public rotation_rate_z: number;
                    public gravity_x: number;
                    public gravity_y: number;
                    public gravity_z: number;
                    public status: number;
                    public static create(properties?: POGOProtos.Networking.Envelopes.Signature.ISensorInfo): POGOProtos.Networking.Envelopes.Signature.SensorInfo;
                    public static encode(message: POGOProtos.Networking.Envelopes.Signature.ISensorInfo, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Envelopes.Signature.ISensorInfo, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Envelopes.Signature.SensorInfo;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Envelopes.Signature.SensorInfo;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Envelopes.Signature.SensorInfo;
                    public static toObject(message: POGOProtos.Networking.Envelopes.Signature.SensorInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IDeviceInfo {
                    device_id?: (string|null);
                    android_board_name?: (string|null);
                    android_bootloader?: (string|null);
                    device_brand?: (string|null);
                    device_model?: (string|null);
                    device_model_identifier?: (string|null);
                    device_model_boot?: (string|null);
                    hardware_manufacturer?: (string|null);
                    hardware_model?: (string|null);
                    firmware_brand?: (string|null);
                    firmware_tags?: (string|null);
                    firmware_type?: (string|null);
                    firmware_fingerprint?: (string|null);
                }

                class DeviceInfo implements IDeviceInfo {
                    constructor(properties?: POGOProtos.Networking.Envelopes.Signature.IDeviceInfo);
                    public device_id: string;
                    public android_board_name: string;
                    public android_bootloader: string;
                    public device_brand: string;
                    public device_model: string;
                    public device_model_identifier: string;
                    public device_model_boot: string;
                    public hardware_manufacturer: string;
                    public hardware_model: string;
                    public firmware_brand: string;
                    public firmware_tags: string;
                    public firmware_type: string;
                    public firmware_fingerprint: string;
                    public static create(properties?: POGOProtos.Networking.Envelopes.Signature.IDeviceInfo): POGOProtos.Networking.Envelopes.Signature.DeviceInfo;
                    public static encode(message: POGOProtos.Networking.Envelopes.Signature.IDeviceInfo, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Envelopes.Signature.IDeviceInfo, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Envelopes.Signature.DeviceInfo;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Envelopes.Signature.DeviceInfo;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Envelopes.Signature.DeviceInfo;
                    public static toObject(message: POGOProtos.Networking.Envelopes.Signature.DeviceInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IActivityStatus {
                    start_time_ms?: (number|Long|null);
                    unknown_status?: (boolean|null);
                    walking?: (boolean|null);
                    running?: (boolean|null);
                    stationary?: (boolean|null);
                    automotive?: (boolean|null);
                    tilting?: (boolean|null);
                    cycling?: (boolean|null);
                    status?: (Uint8Array|null);
                }

                class ActivityStatus implements IActivityStatus {
                    constructor(properties?: POGOProtos.Networking.Envelopes.Signature.IActivityStatus);
                    public start_time_ms: (number|Long);
                    public unknown_status: boolean;
                    public walking: boolean;
                    public running: boolean;
                    public stationary: boolean;
                    public automotive: boolean;
                    public tilting: boolean;
                    public cycling: boolean;
                    public status: Uint8Array;
                    public static create(properties?: POGOProtos.Networking.Envelopes.Signature.IActivityStatus): POGOProtos.Networking.Envelopes.Signature.ActivityStatus;
                    public static encode(message: POGOProtos.Networking.Envelopes.Signature.IActivityStatus, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Envelopes.Signature.IActivityStatus, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Envelopes.Signature.ActivityStatus;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Envelopes.Signature.ActivityStatus;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Envelopes.Signature.ActivityStatus;
                    public static toObject(message: POGOProtos.Networking.Envelopes.Signature.ActivityStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }
            }

            interface IUnknownMessage {
            }

            class UnknownMessage implements IUnknownMessage {
                constructor(properties?: POGOProtos.Networking.Envelopes.IUnknownMessage);
                public static create(properties?: POGOProtos.Networking.Envelopes.IUnknownMessage): POGOProtos.Networking.Envelopes.UnknownMessage;
                public static encode(message: POGOProtos.Networking.Envelopes.IUnknownMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Envelopes.IUnknownMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Envelopes.UnknownMessage;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Envelopes.UnknownMessage;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Envelopes.UnknownMessage;
                public static toObject(message: POGOProtos.Networking.Envelopes.UnknownMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }
        }

        namespace Platform {

            enum PlatformRequestType {
                METHOD_UNSET = 0,
                BUY_ITEM_POKECOINS = 2,
                BUY_ITEM_ANDROID = 3,
                BUY_ITEM_IOS = 4,
                GET_STORE_ITEMS = 5,
                SEND_ENCRYPTED_SIGNATURE = 6,
                UNKNOWN_PTR_8 = 8,
                JOIN_EVENT = 9
            }

            namespace Requests {

                interface IBuyItemAndroidRequest {
                    buy_item_intent?: (string|null);
                }

                class BuyItemAndroidRequest implements IBuyItemAndroidRequest {
                    constructor(properties?: POGOProtos.Networking.Platform.Requests.IBuyItemAndroidRequest);
                    public buy_item_intent: string;
                    public static create(properties?: POGOProtos.Networking.Platform.Requests.IBuyItemAndroidRequest): POGOProtos.Networking.Platform.Requests.BuyItemAndroidRequest;
                    public static encode(message: POGOProtos.Networking.Platform.Requests.IBuyItemAndroidRequest, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Platform.Requests.IBuyItemAndroidRequest, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Platform.Requests.BuyItemAndroidRequest;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Platform.Requests.BuyItemAndroidRequest;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Platform.Requests.BuyItemAndroidRequest;
                    public static toObject(message: POGOProtos.Networking.Platform.Requests.BuyItemAndroidRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IBuyItemPokeCoinsRequest {
                    item_id?: (string|null);
                }

                class BuyItemPokeCoinsRequest implements IBuyItemPokeCoinsRequest {
                    constructor(properties?: POGOProtos.Networking.Platform.Requests.IBuyItemPokeCoinsRequest);
                    public item_id: string;
                    public static create(properties?: POGOProtos.Networking.Platform.Requests.IBuyItemPokeCoinsRequest): POGOProtos.Networking.Platform.Requests.BuyItemPokeCoinsRequest;
                    public static encode(message: POGOProtos.Networking.Platform.Requests.IBuyItemPokeCoinsRequest, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Platform.Requests.IBuyItemPokeCoinsRequest, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Platform.Requests.BuyItemPokeCoinsRequest;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Platform.Requests.BuyItemPokeCoinsRequest;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Platform.Requests.BuyItemPokeCoinsRequest;
                    public static toObject(message: POGOProtos.Networking.Platform.Requests.BuyItemPokeCoinsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IGetStoreItemsRequest {
                }

                class GetStoreItemsRequest implements IGetStoreItemsRequest {
                    constructor(properties?: POGOProtos.Networking.Platform.Requests.IGetStoreItemsRequest);
                    public static create(properties?: POGOProtos.Networking.Platform.Requests.IGetStoreItemsRequest): POGOProtos.Networking.Platform.Requests.GetStoreItemsRequest;
                    public static encode(message: POGOProtos.Networking.Platform.Requests.IGetStoreItemsRequest, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Platform.Requests.IGetStoreItemsRequest, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Platform.Requests.GetStoreItemsRequest;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Platform.Requests.GetStoreItemsRequest;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Platform.Requests.GetStoreItemsRequest;
                    public static toObject(message: POGOProtos.Networking.Platform.Requests.GetStoreItemsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface ISendEncryptedSignatureRequest {
                    encrypted_signature?: (Uint8Array|null);
                }

                class SendEncryptedSignatureRequest implements ISendEncryptedSignatureRequest {
                    constructor(properties?: POGOProtos.Networking.Platform.Requests.ISendEncryptedSignatureRequest);
                    public encrypted_signature: Uint8Array;
                    public static create(properties?: POGOProtos.Networking.Platform.Requests.ISendEncryptedSignatureRequest): POGOProtos.Networking.Platform.Requests.SendEncryptedSignatureRequest;
                    public static encode(message: POGOProtos.Networking.Platform.Requests.ISendEncryptedSignatureRequest, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Platform.Requests.ISendEncryptedSignatureRequest, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Platform.Requests.SendEncryptedSignatureRequest;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Platform.Requests.SendEncryptedSignatureRequest;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Platform.Requests.SendEncryptedSignatureRequest;
                    public static toObject(message: POGOProtos.Networking.Platform.Requests.SendEncryptedSignatureRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IUnknownPtr8Request {
                    message?: (string|null);
                }

                class UnknownPtr8Request implements IUnknownPtr8Request {
                    constructor(properties?: POGOProtos.Networking.Platform.Requests.IUnknownPtr8Request);
                    public message: string;
                    public static create(properties?: POGOProtos.Networking.Platform.Requests.IUnknownPtr8Request): POGOProtos.Networking.Platform.Requests.UnknownPtr8Request;
                    public static encode(message: POGOProtos.Networking.Platform.Requests.IUnknownPtr8Request, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Platform.Requests.IUnknownPtr8Request, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Platform.Requests.UnknownPtr8Request;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Platform.Requests.UnknownPtr8Request;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Platform.Requests.UnknownPtr8Request;
                    public static toObject(message: POGOProtos.Networking.Platform.Requests.UnknownPtr8Request, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }
            }

            namespace Responses {

                interface IBuyItemAndroidResponse {
                    result?: (POGOProtos.Networking.Platform.Responses.BuyItemAndroidResponse.Status|null);
                    purchase_token?: (string|null);
                }

                class BuyItemAndroidResponse implements IBuyItemAndroidResponse {
                    constructor(properties?: POGOProtos.Networking.Platform.Responses.IBuyItemAndroidResponse);
                    public result: POGOProtos.Networking.Platform.Responses.BuyItemAndroidResponse.Status;
                    public purchase_token: string;
                    public static create(properties?: POGOProtos.Networking.Platform.Responses.IBuyItemAndroidResponse): POGOProtos.Networking.Platform.Responses.BuyItemAndroidResponse;
                    public static encode(message: POGOProtos.Networking.Platform.Responses.IBuyItemAndroidResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Platform.Responses.IBuyItemAndroidResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Platform.Responses.BuyItemAndroidResponse;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Platform.Responses.BuyItemAndroidResponse;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Platform.Responses.BuyItemAndroidResponse;
                    public static toObject(message: POGOProtos.Networking.Platform.Responses.BuyItemAndroidResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                namespace BuyItemAndroidResponse {

                    enum Status {
                        UNKNOWN = 0,
                        SUCCESS = 1
                    }
                }

                interface IBuyItemPokeCoinsResponse {
                    result?: (POGOProtos.Networking.Platform.Responses.BuyItemPokeCoinsResponse.Status|null);
                }

                class BuyItemPokeCoinsResponse implements IBuyItemPokeCoinsResponse {
                    constructor(properties?: POGOProtos.Networking.Platform.Responses.IBuyItemPokeCoinsResponse);
                    public result: POGOProtos.Networking.Platform.Responses.BuyItemPokeCoinsResponse.Status;
                    public static create(properties?: POGOProtos.Networking.Platform.Responses.IBuyItemPokeCoinsResponse): POGOProtos.Networking.Platform.Responses.BuyItemPokeCoinsResponse;
                    public static encode(message: POGOProtos.Networking.Platform.Responses.IBuyItemPokeCoinsResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Platform.Responses.IBuyItemPokeCoinsResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Platform.Responses.BuyItemPokeCoinsResponse;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Platform.Responses.BuyItemPokeCoinsResponse;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Platform.Responses.BuyItemPokeCoinsResponse;
                    public static toObject(message: POGOProtos.Networking.Platform.Responses.BuyItemPokeCoinsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                namespace BuyItemPokeCoinsResponse {

                    enum Status {
                        UNKNOWN = 0,
                        SUCCESS = 1,
                        NOT_ENOUGH_POKECOINS = 3
                    }
                }

                interface IGetStoreItemsResponse {
                    status?: (POGOProtos.Networking.Platform.Responses.GetStoreItemsResponse.Status|null);
                    items?: (POGOProtos.Networking.Platform.Responses.GetStoreItemsResponse.IStoreItem[]|null);
                    player_currencies?: (POGOProtos.Data.Player.ICurrency[]|null);
                    hash?: (string|null);
                }

                class GetStoreItemsResponse implements IGetStoreItemsResponse {
                    constructor(properties?: POGOProtos.Networking.Platform.Responses.IGetStoreItemsResponse);
                    public status: POGOProtos.Networking.Platform.Responses.GetStoreItemsResponse.Status;
                    public items: POGOProtos.Networking.Platform.Responses.GetStoreItemsResponse.IStoreItem[];
                    public player_currencies: POGOProtos.Data.Player.ICurrency[];
                    public hash: string;
                    public static create(properties?: POGOProtos.Networking.Platform.Responses.IGetStoreItemsResponse): POGOProtos.Networking.Platform.Responses.GetStoreItemsResponse;
                    public static encode(message: POGOProtos.Networking.Platform.Responses.IGetStoreItemsResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Platform.Responses.IGetStoreItemsResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Platform.Responses.GetStoreItemsResponse;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Platform.Responses.GetStoreItemsResponse;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Platform.Responses.GetStoreItemsResponse;
                    public static toObject(message: POGOProtos.Networking.Platform.Responses.GetStoreItemsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                namespace GetStoreItemsResponse {

                    interface IStoreItem {
                        item_id?: (string|null);
                        is_iap?: (boolean|null);
                        currency_to_buy?: (POGOProtos.Data.Player.ICurrency|null);
                        yields_currency?: (POGOProtos.Data.Player.ICurrency|null);
                        yields_item?: (POGOProtos.Networking.Platform.Responses.GetStoreItemsResponse.IStoreItemInfo|null);
                        tags?: (POGOProtos.Networking.Platform.Responses.GetStoreItemsResponse.IStoreTags[]|null);
                        unknown7?: (number|null);
                    }

                    class StoreItem implements IStoreItem {
                        constructor(properties?: POGOProtos.Networking.Platform.Responses.GetStoreItemsResponse.IStoreItem);
                        public item_id: string;
                        public is_iap: boolean;
                        public currency_to_buy?: (POGOProtos.Data.Player.ICurrency|null);
                        public yields_currency?: (POGOProtos.Data.Player.ICurrency|null);
                        public yields_item?: (POGOProtos.Networking.Platform.Responses.GetStoreItemsResponse.IStoreItemInfo|null);
                        public tags: POGOProtos.Networking.Platform.Responses.GetStoreItemsResponse.IStoreTags[];
                        public unknown7: number;
                        public static create(properties?: POGOProtos.Networking.Platform.Responses.GetStoreItemsResponse.IStoreItem): POGOProtos.Networking.Platform.Responses.GetStoreItemsResponse.StoreItem;
                        public static encode(message: POGOProtos.Networking.Platform.Responses.GetStoreItemsResponse.IStoreItem, writer?: $protobuf.Writer): $protobuf.Writer;
                        public static encodeDelimited(message: POGOProtos.Networking.Platform.Responses.GetStoreItemsResponse.IStoreItem, writer?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Platform.Responses.GetStoreItemsResponse.StoreItem;
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Platform.Responses.GetStoreItemsResponse.StoreItem;
                        public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Platform.Responses.GetStoreItemsResponse.StoreItem;
                        public static toObject(message: POGOProtos.Networking.Platform.Responses.GetStoreItemsResponse.StoreItem, options?: $protobuf.IConversionOptions): { [k: string]: any };
                        public toJSON(): { [k: string]: any };
                    }

                    interface IStoreTags {
                        tag?: (string|null);
                        value?: (string|null);
                    }

                    class StoreTags implements IStoreTags {
                        constructor(properties?: POGOProtos.Networking.Platform.Responses.GetStoreItemsResponse.IStoreTags);
                        public tag: string;
                        public value: string;
                        public static create(properties?: POGOProtos.Networking.Platform.Responses.GetStoreItemsResponse.IStoreTags): POGOProtos.Networking.Platform.Responses.GetStoreItemsResponse.StoreTags;
                        public static encode(message: POGOProtos.Networking.Platform.Responses.GetStoreItemsResponse.IStoreTags, writer?: $protobuf.Writer): $protobuf.Writer;
                        public static encodeDelimited(message: POGOProtos.Networking.Platform.Responses.GetStoreItemsResponse.IStoreTags, writer?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Platform.Responses.GetStoreItemsResponse.StoreTags;
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Platform.Responses.GetStoreItemsResponse.StoreTags;
                        public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Platform.Responses.GetStoreItemsResponse.StoreTags;
                        public static toObject(message: POGOProtos.Networking.Platform.Responses.GetStoreItemsResponse.StoreTags, options?: $protobuf.IConversionOptions): { [k: string]: any };
                        public toJSON(): { [k: string]: any };
                    }

                    interface IStoreItemInfo {
                        item_id?: (string|null);
                        count?: (number|null);
                    }

                    class StoreItemInfo implements IStoreItemInfo {
                        constructor(properties?: POGOProtos.Networking.Platform.Responses.GetStoreItemsResponse.IStoreItemInfo);
                        public item_id: string;
                        public count: number;
                        public static create(properties?: POGOProtos.Networking.Platform.Responses.GetStoreItemsResponse.IStoreItemInfo): POGOProtos.Networking.Platform.Responses.GetStoreItemsResponse.StoreItemInfo;
                        public static encode(message: POGOProtos.Networking.Platform.Responses.GetStoreItemsResponse.IStoreItemInfo, writer?: $protobuf.Writer): $protobuf.Writer;
                        public static encodeDelimited(message: POGOProtos.Networking.Platform.Responses.GetStoreItemsResponse.IStoreItemInfo, writer?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Platform.Responses.GetStoreItemsResponse.StoreItemInfo;
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Platform.Responses.GetStoreItemsResponse.StoreItemInfo;
                        public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Platform.Responses.GetStoreItemsResponse.StoreItemInfo;
                        public static toObject(message: POGOProtos.Networking.Platform.Responses.GetStoreItemsResponse.StoreItemInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };
                        public toJSON(): { [k: string]: any };
                    }

                    enum Status {
                        UNDEFINED = 0,
                        OKAY = 1
                    }
                }

                interface ISendEncryptedSignatureResponse {
                    received?: (boolean|null);
                }

                class SendEncryptedSignatureResponse implements ISendEncryptedSignatureResponse {
                    constructor(properties?: POGOProtos.Networking.Platform.Responses.ISendEncryptedSignatureResponse);
                    public received: boolean;
                    public static create(properties?: POGOProtos.Networking.Platform.Responses.ISendEncryptedSignatureResponse): POGOProtos.Networking.Platform.Responses.SendEncryptedSignatureResponse;
                    public static encode(message: POGOProtos.Networking.Platform.Responses.ISendEncryptedSignatureResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Platform.Responses.ISendEncryptedSignatureResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Platform.Responses.SendEncryptedSignatureResponse;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Platform.Responses.SendEncryptedSignatureResponse;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Platform.Responses.SendEncryptedSignatureResponse;
                    public static toObject(message: POGOProtos.Networking.Platform.Responses.SendEncryptedSignatureResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IUnknownPtr8Response {
                    message?: (string|null);
                }

                class UnknownPtr8Response implements IUnknownPtr8Response {
                    constructor(properties?: POGOProtos.Networking.Platform.Responses.IUnknownPtr8Response);
                    public message: string;
                    public static create(properties?: POGOProtos.Networking.Platform.Responses.IUnknownPtr8Response): POGOProtos.Networking.Platform.Responses.UnknownPtr8Response;
                    public static encode(message: POGOProtos.Networking.Platform.Responses.IUnknownPtr8Response, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Platform.Responses.IUnknownPtr8Response, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Platform.Responses.UnknownPtr8Response;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Platform.Responses.UnknownPtr8Response;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Platform.Responses.UnknownPtr8Response;
                    public static toObject(message: POGOProtos.Networking.Platform.Responses.UnknownPtr8Response, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }
            }
        }

        namespace Requests {

            namespace Messages {

                interface IAddFortModifierMessage {
                    modifier_type?: (POGOProtos.Inventory.Item.ItemId|null);
                    fort_id?: (string|null);
                    player_latitude?: (number|null);
                    player_longitude?: (number|null);
                }

                class AddFortModifierMessage implements IAddFortModifierMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IAddFortModifierMessage);
                    public modifier_type: POGOProtos.Inventory.Item.ItemId;
                    public fort_id: string;
                    public player_latitude: number;
                    public player_longitude: number;
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IAddFortModifierMessage): POGOProtos.Networking.Requests.Messages.AddFortModifierMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IAddFortModifierMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IAddFortModifierMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.AddFortModifierMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.AddFortModifierMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.AddFortModifierMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.AddFortModifierMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IAttackGymMessage {
                    gym_id?: (string|null);
                    battle_id?: (string|null);
                    attack_actions?: (POGOProtos.Data.Battle.IBattleAction[]|null);
                    last_retrieved_action?: (POGOProtos.Data.Battle.IBattleAction|null);
                    player_latitude?: (number|null);
                    player_longitude?: (number|null);
                }

                class AttackGymMessage implements IAttackGymMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IAttackGymMessage);
                    public gym_id: string;
                    public battle_id: string;
                    public attack_actions: POGOProtos.Data.Battle.IBattleAction[];
                    public last_retrieved_action?: (POGOProtos.Data.Battle.IBattleAction|null);
                    public player_latitude: number;
                    public player_longitude: number;
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IAttackGymMessage): POGOProtos.Networking.Requests.Messages.AttackGymMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IAttackGymMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IAttackGymMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.AttackGymMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.AttackGymMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.AttackGymMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.AttackGymMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IAwardFreeRaidTicketMessage {
                    gym_id?: (string|null);
                    player_lat_degrees?: (number|null);
                    player_lng_degrees?: (number|null);
                }

                class AwardFreeRaidTicketMessage implements IAwardFreeRaidTicketMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IAwardFreeRaidTicketMessage);
                    public gym_id: string;
                    public player_lat_degrees: number;
                    public player_lng_degrees: number;
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IAwardFreeRaidTicketMessage): POGOProtos.Networking.Requests.Messages.AwardFreeRaidTicketMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IAwardFreeRaidTicketMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IAwardFreeRaidTicketMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.AwardFreeRaidTicketMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.AwardFreeRaidTicketMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.AwardFreeRaidTicketMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.AwardFreeRaidTicketMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface ICatchPokemonMessage {
                    encounter_id?: (number|Long|null);
                    pokeball?: (POGOProtos.Inventory.Item.ItemId|null);
                    normalized_reticle_size?: (number|null);
                    spawn_point_id?: (string|null);
                    hit_pokemon?: (boolean|null);
                    spin_modifier?: (number|null);
                    normalized_hit_position?: (number|null);
                    ar_plus_values?: (POGOProtos.Data.IARPlusEncounterValues|null);
                }

                class CatchPokemonMessage implements ICatchPokemonMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.ICatchPokemonMessage);
                    public encounter_id: (number|Long);
                    public pokeball: POGOProtos.Inventory.Item.ItemId;
                    public normalized_reticle_size: number;
                    public spawn_point_id: string;
                    public hit_pokemon: boolean;
                    public spin_modifier: number;
                    public normalized_hit_position: number;
                    public ar_plus_values?: (POGOProtos.Data.IARPlusEncounterValues|null);
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.ICatchPokemonMessage): POGOProtos.Networking.Requests.Messages.CatchPokemonMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.ICatchPokemonMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.ICatchPokemonMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.CatchPokemonMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.CatchPokemonMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.CatchPokemonMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.CatchPokemonMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface ICheckAwardedBadgesMessage {
                }

                class CheckAwardedBadgesMessage implements ICheckAwardedBadgesMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.ICheckAwardedBadgesMessage);
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.ICheckAwardedBadgesMessage): POGOProtos.Networking.Requests.Messages.CheckAwardedBadgesMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.ICheckAwardedBadgesMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.ICheckAwardedBadgesMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.CheckAwardedBadgesMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.CheckAwardedBadgesMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.CheckAwardedBadgesMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.CheckAwardedBadgesMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface ICheckChallengeMessage {
                    debug_request?: (boolean|null);
                }

                class CheckChallengeMessage implements ICheckChallengeMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.ICheckChallengeMessage);
                    public debug_request: boolean;
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.ICheckChallengeMessage): POGOProtos.Networking.Requests.Messages.CheckChallengeMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.ICheckChallengeMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.ICheckChallengeMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.CheckChallengeMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.CheckChallengeMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.CheckChallengeMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.CheckChallengeMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IClaimCodenameMessage {
                    codename?: (string|null);
                    force?: (boolean|null);
                    generate_suggested_codenames?: (boolean|null);
                }

                class ClaimCodenameMessage implements IClaimCodenameMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IClaimCodenameMessage);
                    public codename: string;
                    public force: boolean;
                    public generate_suggested_codenames: boolean;
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IClaimCodenameMessage): POGOProtos.Networking.Requests.Messages.ClaimCodenameMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IClaimCodenameMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IClaimCodenameMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.ClaimCodenameMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.ClaimCodenameMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.ClaimCodenameMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.ClaimCodenameMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface ICollectDailyBonusMessage {
                }

                class CollectDailyBonusMessage implements ICollectDailyBonusMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.ICollectDailyBonusMessage);
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.ICollectDailyBonusMessage): POGOProtos.Networking.Requests.Messages.CollectDailyBonusMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.ICollectDailyBonusMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.ICollectDailyBonusMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.CollectDailyBonusMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.CollectDailyBonusMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.CollectDailyBonusMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.CollectDailyBonusMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface ICollectDailyDefenderBonusMessage {
                }

                class CollectDailyDefenderBonusMessage implements ICollectDailyDefenderBonusMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.ICollectDailyDefenderBonusMessage);
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.ICollectDailyDefenderBonusMessage): POGOProtos.Networking.Requests.Messages.CollectDailyDefenderBonusMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.ICollectDailyDefenderBonusMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.ICollectDailyDefenderBonusMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.CollectDailyDefenderBonusMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.CollectDailyDefenderBonusMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.CollectDailyDefenderBonusMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.CollectDailyDefenderBonusMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface ICompleteQuestMessage {
                    quest_id?: (string|null);
                    sub_quest_id?: (string|null);
                }

                class CompleteQuestMessage implements ICompleteQuestMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.ICompleteQuestMessage);
                    public quest_id: string;
                    public sub_quest_id: string;
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.ICompleteQuestMessage): POGOProtos.Networking.Requests.Messages.CompleteQuestMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.ICompleteQuestMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.ICompleteQuestMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.CompleteQuestMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.CompleteQuestMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.CompleteQuestMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.CompleteQuestMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface ICompleteQuestStampCardMessage {
                }

                class CompleteQuestStampCardMessage implements ICompleteQuestStampCardMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.ICompleteQuestStampCardMessage);
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.ICompleteQuestStampCardMessage): POGOProtos.Networking.Requests.Messages.CompleteQuestStampCardMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.ICompleteQuestStampCardMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.ICompleteQuestStampCardMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.CompleteQuestStampCardMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.CompleteQuestStampCardMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.CompleteQuestStampCardMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.CompleteQuestStampCardMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IDiskEncounterMessage {
                    encounter_id?: (number|Long|null);
                    fort_id?: (string|null);
                    player_latitude?: (number|null);
                    player_longitude?: (number|null);
                    gym_lat_degrees?: (number|null);
                    gym_lng_degrees?: (number|null);
                }

                class DiskEncounterMessage implements IDiskEncounterMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IDiskEncounterMessage);
                    public encounter_id: (number|Long);
                    public fort_id: string;
                    public player_latitude: number;
                    public player_longitude: number;
                    public gym_lat_degrees: number;
                    public gym_lng_degrees: number;
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IDiskEncounterMessage): POGOProtos.Networking.Requests.Messages.DiskEncounterMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IDiskEncounterMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IDiskEncounterMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.DiskEncounterMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.DiskEncounterMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.DiskEncounterMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.DiskEncounterMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IDownloadGmTemplatesMessage {
                    basis_batch_id?: (number|Long|null);
                    batch_id?: (number|Long|null);
                    page_offset?: (number|null);
                }

                class DownloadGmTemplatesMessage implements IDownloadGmTemplatesMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IDownloadGmTemplatesMessage);
                    public basis_batch_id: (number|Long);
                    public batch_id: (number|Long);
                    public page_offset: number;
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IDownloadGmTemplatesMessage): POGOProtos.Networking.Requests.Messages.DownloadGmTemplatesMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IDownloadGmTemplatesMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IDownloadGmTemplatesMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.DownloadGmTemplatesMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.DownloadGmTemplatesMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.DownloadGmTemplatesMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.DownloadGmTemplatesMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IDownloadItemTemplatesMessage {
                    paginate?: (boolean|null);
                    page_offset?: (number|null);
                    page_timestamp?: (number|Long|null);
                }

                class DownloadItemTemplatesMessage implements IDownloadItemTemplatesMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IDownloadItemTemplatesMessage);
                    public paginate: boolean;
                    public page_offset: number;
                    public page_timestamp: (number|Long);
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IDownloadItemTemplatesMessage): POGOProtos.Networking.Requests.Messages.DownloadItemTemplatesMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IDownloadItemTemplatesMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IDownloadItemTemplatesMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.DownloadItemTemplatesMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.DownloadItemTemplatesMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.DownloadItemTemplatesMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.DownloadItemTemplatesMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IDownloadRemoteConfigVersionMessage {
                    platform?: (POGOProtos.Enums.Platform|null);
                    device_manufacturer?: (string|null);
                    device_model?: (string|null);
                    locale?: (string|null);
                    app_version?: (number|null);
                }

                class DownloadRemoteConfigVersionMessage implements IDownloadRemoteConfigVersionMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IDownloadRemoteConfigVersionMessage);
                    public platform: POGOProtos.Enums.Platform;
                    public device_manufacturer: string;
                    public device_model: string;
                    public locale: string;
                    public app_version: number;
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IDownloadRemoteConfigVersionMessage): POGOProtos.Networking.Requests.Messages.DownloadRemoteConfigVersionMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IDownloadRemoteConfigVersionMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IDownloadRemoteConfigVersionMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.DownloadRemoteConfigVersionMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.DownloadRemoteConfigVersionMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.DownloadRemoteConfigVersionMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.DownloadRemoteConfigVersionMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IDownloadSettingsMessage {
                    hash?: (string|null);
                }

                class DownloadSettingsMessage implements IDownloadSettingsMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IDownloadSettingsMessage);
                    public hash: string;
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IDownloadSettingsMessage): POGOProtos.Networking.Requests.Messages.DownloadSettingsMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IDownloadSettingsMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IDownloadSettingsMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.DownloadSettingsMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.DownloadSettingsMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.DownloadSettingsMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.DownloadSettingsMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IEchoMessage {
                }

                class EchoMessage implements IEchoMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IEchoMessage);
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IEchoMessage): POGOProtos.Networking.Requests.Messages.EchoMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IEchoMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IEchoMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.EchoMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.EchoMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.EchoMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.EchoMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IEncounterMessage {
                    encounter_id?: (number|Long|null);
                    spawn_point_id?: (string|null);
                    player_latitude?: (number|null);
                    player_longitude?: (number|null);
                }

                class EncounterMessage implements IEncounterMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IEncounterMessage);
                    public encounter_id: (number|Long);
                    public spawn_point_id: string;
                    public player_latitude: number;
                    public player_longitude: number;
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IEncounterMessage): POGOProtos.Networking.Requests.Messages.EncounterMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IEncounterMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IEncounterMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.EncounterMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.EncounterMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.EncounterMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.EncounterMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IEncounterTutorialCompleteMessage {
                    pokemon_id?: (POGOProtos.Enums.PokemonId|null);
                }

                class EncounterTutorialCompleteMessage implements IEncounterTutorialCompleteMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IEncounterTutorialCompleteMessage);
                    public pokemon_id: POGOProtos.Enums.PokemonId;
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IEncounterTutorialCompleteMessage): POGOProtos.Networking.Requests.Messages.EncounterTutorialCompleteMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IEncounterTutorialCompleteMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IEncounterTutorialCompleteMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.EncounterTutorialCompleteMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.EncounterTutorialCompleteMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.EncounterTutorialCompleteMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.EncounterTutorialCompleteMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IEquipBadgeMessage {
                    badge_type?: (POGOProtos.Enums.BadgeType|null);
                }

                class EquipBadgeMessage implements IEquipBadgeMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IEquipBadgeMessage);
                    public badge_type: POGOProtos.Enums.BadgeType;
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IEquipBadgeMessage): POGOProtos.Networking.Requests.Messages.EquipBadgeMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IEquipBadgeMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IEquipBadgeMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.EquipBadgeMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.EquipBadgeMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.EquipBadgeMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.EquipBadgeMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IEvolvePokemonMessage {
                    pokemon_id?: (number|Long|null);
                    evolution_item_requirement?: (POGOProtos.Inventory.Item.ItemId|null);
                }

                class EvolvePokemonMessage implements IEvolvePokemonMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IEvolvePokemonMessage);
                    public pokemon_id: (number|Long);
                    public evolution_item_requirement: POGOProtos.Inventory.Item.ItemId;
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IEvolvePokemonMessage): POGOProtos.Networking.Requests.Messages.EvolvePokemonMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IEvolvePokemonMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IEvolvePokemonMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.EvolvePokemonMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.EvolvePokemonMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.EvolvePokemonMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.EvolvePokemonMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IFetchAllNewsMessage {
                }

                class FetchAllNewsMessage implements IFetchAllNewsMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IFetchAllNewsMessage);
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IFetchAllNewsMessage): POGOProtos.Networking.Requests.Messages.FetchAllNewsMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IFetchAllNewsMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IFetchAllNewsMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.FetchAllNewsMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.FetchAllNewsMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.FetchAllNewsMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.FetchAllNewsMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IFortDeployPokemonMessage {
                    fort_id?: (string|null);
                    pokemon_id?: (number|Long|null);
                    player_latitude?: (number|null);
                    player_longitude?: (number|null);
                }

                class FortDeployPokemonMessage implements IFortDeployPokemonMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IFortDeployPokemonMessage);
                    public fort_id: string;
                    public pokemon_id: (number|Long);
                    public player_latitude: number;
                    public player_longitude: number;
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IFortDeployPokemonMessage): POGOProtos.Networking.Requests.Messages.FortDeployPokemonMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IFortDeployPokemonMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IFortDeployPokemonMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.FortDeployPokemonMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.FortDeployPokemonMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.FortDeployPokemonMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.FortDeployPokemonMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IFortDetailsMessage {
                    fort_id?: (string|null);
                    latitude?: (number|null);
                    longitude?: (number|null);
                }

                class FortDetailsMessage implements IFortDetailsMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IFortDetailsMessage);
                    public fort_id: string;
                    public latitude: number;
                    public longitude: number;
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IFortDetailsMessage): POGOProtos.Networking.Requests.Messages.FortDetailsMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IFortDetailsMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IFortDetailsMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.FortDetailsMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.FortDetailsMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.FortDetailsMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.FortDetailsMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IFortRecallPokemonMessage {
                    fort_id?: (string|null);
                    pokemon_id?: (number|Long|null);
                    player_latitude?: (number|null);
                    player_longitude?: (number|null);
                }

                class FortRecallPokemonMessage implements IFortRecallPokemonMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IFortRecallPokemonMessage);
                    public fort_id: string;
                    public pokemon_id: (number|Long);
                    public player_latitude: number;
                    public player_longitude: number;
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IFortRecallPokemonMessage): POGOProtos.Networking.Requests.Messages.FortRecallPokemonMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IFortRecallPokemonMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IFortRecallPokemonMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.FortRecallPokemonMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.FortRecallPokemonMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.FortRecallPokemonMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.FortRecallPokemonMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IFortSearchMessage {
                    fort_id?: (string|null);
                    player_latitude?: (number|null);
                    player_longitude?: (number|null);
                    fort_latitude?: (number|null);
                    fort_longitude?: (number|null);
                }

                class FortSearchMessage implements IFortSearchMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IFortSearchMessage);
                    public fort_id: string;
                    public player_latitude: number;
                    public player_longitude: number;
                    public fort_latitude: number;
                    public fort_longitude: number;
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IFortSearchMessage): POGOProtos.Networking.Requests.Messages.FortSearchMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IFortSearchMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IFortSearchMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.FortSearchMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.FortSearchMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.FortSearchMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.FortSearchMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IGetAssetDigestMessage {
                    platform?: (POGOProtos.Enums.Platform|null);
                    device_manufacturer?: (string|null);
                    device_model?: (string|null);
                    locale?: (string|null);
                    app_version?: (number|null);
                    paginate?: (boolean|null);
                    page_offset?: (number|null);
                    page_timestamp?: (number|Long|null);
                }

                class GetAssetDigestMessage implements IGetAssetDigestMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IGetAssetDigestMessage);
                    public platform: POGOProtos.Enums.Platform;
                    public device_manufacturer: string;
                    public device_model: string;
                    public locale: string;
                    public app_version: number;
                    public paginate: boolean;
                    public page_offset: number;
                    public page_timestamp: (number|Long);
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IGetAssetDigestMessage): POGOProtos.Networking.Requests.Messages.GetAssetDigestMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IGetAssetDigestMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IGetAssetDigestMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.GetAssetDigestMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.GetAssetDigestMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.GetAssetDigestMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.GetAssetDigestMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IGetBuddyWalkedMessage {
                }

                class GetBuddyWalkedMessage implements IGetBuddyWalkedMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IGetBuddyWalkedMessage);
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IGetBuddyWalkedMessage): POGOProtos.Networking.Requests.Messages.GetBuddyWalkedMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IGetBuddyWalkedMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IGetBuddyWalkedMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.GetBuddyWalkedMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.GetBuddyWalkedMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.GetBuddyWalkedMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.GetBuddyWalkedMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IGetDownloadUrlsMessage {
                    asset_id?: (string[]|null);
                }

                class GetDownloadUrlsMessage implements IGetDownloadUrlsMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IGetDownloadUrlsMessage);
                    public asset_id: string[];
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IGetDownloadUrlsMessage): POGOProtos.Networking.Requests.Messages.GetDownloadUrlsMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IGetDownloadUrlsMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IGetDownloadUrlsMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.GetDownloadUrlsMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.GetDownloadUrlsMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.GetDownloadUrlsMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.GetDownloadUrlsMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IGetGymBadgeDetailsMessage {
                    fort_id?: (string|null);
                    latitude?: (number|null);
                    longitude?: (number|null);
                }

                class GetGymBadgeDetailsMessage implements IGetGymBadgeDetailsMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IGetGymBadgeDetailsMessage);
                    public fort_id: string;
                    public latitude: number;
                    public longitude: number;
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IGetGymBadgeDetailsMessage): POGOProtos.Networking.Requests.Messages.GetGymBadgeDetailsMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IGetGymBadgeDetailsMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IGetGymBadgeDetailsMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.GetGymBadgeDetailsMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.GetGymBadgeDetailsMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.GetGymBadgeDetailsMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.GetGymBadgeDetailsMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IGetGymDetailsMessage {
                    gym_id?: (string|null);
                    player_latitude?: (number|null);
                    player_longitude?: (number|null);
                    gym_latitude?: (number|null);
                    gym_longitude?: (number|null);
                    client_version?: (string|null);
                }

                class GetGymDetailsMessage implements IGetGymDetailsMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IGetGymDetailsMessage);
                    public gym_id: string;
                    public player_latitude: number;
                    public player_longitude: number;
                    public gym_latitude: number;
                    public gym_longitude: number;
                    public client_version: string;
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IGetGymDetailsMessage): POGOProtos.Networking.Requests.Messages.GetGymDetailsMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IGetGymDetailsMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IGetGymDetailsMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.GetGymDetailsMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.GetGymDetailsMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.GetGymDetailsMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.GetGymDetailsMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IGetHatchedEggsMessage {
                }

                class GetHatchedEggsMessage implements IGetHatchedEggsMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IGetHatchedEggsMessage);
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IGetHatchedEggsMessage): POGOProtos.Networking.Requests.Messages.GetHatchedEggsMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IGetHatchedEggsMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IGetHatchedEggsMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.GetHatchedEggsMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.GetHatchedEggsMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.GetHatchedEggsMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.GetHatchedEggsMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IGetHoloInventoryMessage {
                    last_timestamp_ms?: (number|Long|null);
                    item_been_seen?: (number|null);
                }

                class GetHoloInventoryMessage implements IGetHoloInventoryMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IGetHoloInventoryMessage);
                    public last_timestamp_ms: (number|Long);
                    public item_been_seen: number;
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IGetHoloInventoryMessage): POGOProtos.Networking.Requests.Messages.GetHoloInventoryMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IGetHoloInventoryMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IGetHoloInventoryMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.GetHoloInventoryMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.GetHoloInventoryMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.GetHoloInventoryMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.GetHoloInventoryMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IGetInboxMessage {
                    is_history?: (boolean|null);
                    is_reverse?: (boolean|null);
                    not_before_ms?: (number|Long|null);
                }

                class GetInboxMessage implements IGetInboxMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IGetInboxMessage);
                    public is_history: boolean;
                    public is_reverse: boolean;
                    public not_before_ms: (number|Long);
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IGetInboxMessage): POGOProtos.Networking.Requests.Messages.GetInboxMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IGetInboxMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IGetInboxMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.GetInboxMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.GetInboxMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.GetInboxMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.GetInboxMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IGetIncensePokemonMessage {
                    player_latitude?: (number|null);
                    player_longitude?: (number|null);
                }

                class GetIncensePokemonMessage implements IGetIncensePokemonMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IGetIncensePokemonMessage);
                    public player_latitude: number;
                    public player_longitude: number;
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IGetIncensePokemonMessage): POGOProtos.Networking.Requests.Messages.GetIncensePokemonMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IGetIncensePokemonMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IGetIncensePokemonMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.GetIncensePokemonMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.GetIncensePokemonMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.GetIncensePokemonMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.GetIncensePokemonMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IGetInventoryMessage {
                    last_timestamp_ms?: (number|Long|null);
                }

                class GetInventoryMessage implements IGetInventoryMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IGetInventoryMessage);
                    public last_timestamp_ms: (number|Long);
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IGetInventoryMessage): POGOProtos.Networking.Requests.Messages.GetInventoryMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IGetInventoryMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IGetInventoryMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.GetInventoryMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.GetInventoryMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.GetInventoryMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.GetInventoryMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IGetMapObjectsMessage {
                    cell_id?: ((number|Long)[]|null);
                    since_timestamp_ms?: ((number|Long)[]|null);
                    latitude?: (number|null);
                    longitude?: (number|null);
                }

                class GetMapObjectsMessage implements IGetMapObjectsMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IGetMapObjectsMessage);
                    public cell_id: (number|Long)[];
                    public since_timestamp_ms: (number|Long)[];
                    public latitude: number;
                    public longitude: number;
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IGetMapObjectsMessage): POGOProtos.Networking.Requests.Messages.GetMapObjectsMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IGetMapObjectsMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IGetMapObjectsMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.GetMapObjectsMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.GetMapObjectsMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.GetMapObjectsMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.GetMapObjectsMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IGetNewQuestsMessage {
                }

                class GetNewQuestsMessage implements IGetNewQuestsMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IGetNewQuestsMessage);
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IGetNewQuestsMessage): POGOProtos.Networking.Requests.Messages.GetNewQuestsMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IGetNewQuestsMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IGetNewQuestsMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.GetNewQuestsMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.GetNewQuestsMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.GetNewQuestsMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.GetNewQuestsMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IGetPlayerMessage {
                    player_locale?: (POGOProtos.Networking.Requests.Messages.GetPlayerMessage.IPlayerLocale|null);
                    prevent_creation?: (boolean|null);
                }

                class GetPlayerMessage implements IGetPlayerMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IGetPlayerMessage);
                    public player_locale?: (POGOProtos.Networking.Requests.Messages.GetPlayerMessage.IPlayerLocale|null);
                    public prevent_creation: boolean;
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IGetPlayerMessage): POGOProtos.Networking.Requests.Messages.GetPlayerMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IGetPlayerMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IGetPlayerMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.GetPlayerMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.GetPlayerMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.GetPlayerMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.GetPlayerMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                namespace GetPlayerMessage {

                    interface IPlayerLocale {
                        country?: (string|null);
                        language?: (string|null);
                        timezone?: (string|null);
                    }

                    class PlayerLocale implements IPlayerLocale {
                        constructor(properties?: POGOProtos.Networking.Requests.Messages.GetPlayerMessage.IPlayerLocale);
                        public country: string;
                        public language: string;
                        public timezone: string;
                        public static create(properties?: POGOProtos.Networking.Requests.Messages.GetPlayerMessage.IPlayerLocale): POGOProtos.Networking.Requests.Messages.GetPlayerMessage.PlayerLocale;
                        public static encode(message: POGOProtos.Networking.Requests.Messages.GetPlayerMessage.IPlayerLocale, writer?: $protobuf.Writer): $protobuf.Writer;
                        public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.GetPlayerMessage.IPlayerLocale, writer?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.GetPlayerMessage.PlayerLocale;
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.GetPlayerMessage.PlayerLocale;
                        public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.GetPlayerMessage.PlayerLocale;
                        public static toObject(message: POGOProtos.Networking.Requests.Messages.GetPlayerMessage.PlayerLocale, options?: $protobuf.IConversionOptions): { [k: string]: any };
                        public toJSON(): { [k: string]: any };
                    }
                }

                interface IGetPlayerProfileMessage {
                    player_name?: (string|null);
                }

                class GetPlayerProfileMessage implements IGetPlayerProfileMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IGetPlayerProfileMessage);
                    public player_name: string;
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IGetPlayerProfileMessage): POGOProtos.Networking.Requests.Messages.GetPlayerProfileMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IGetPlayerProfileMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IGetPlayerProfileMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.GetPlayerProfileMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.GetPlayerProfileMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.GetPlayerProfileMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.GetPlayerProfileMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IGetQuestDetailsMessage {
                    quest_id?: (string[]|null);
                }

                class GetQuestDetailsMessage implements IGetQuestDetailsMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IGetQuestDetailsMessage);
                    public quest_id: string[];
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IGetQuestDetailsMessage): POGOProtos.Networking.Requests.Messages.GetQuestDetailsMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IGetQuestDetailsMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IGetQuestDetailsMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.GetQuestDetailsMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.GetQuestDetailsMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.GetQuestDetailsMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.GetQuestDetailsMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IGetRaidDetailsMessage {
                    raid_seed?: (number|Long|null);
                    gym_id?: (string|null);
                    lobby_id?: (number[]|null);
                    player_lat_degrees?: (number|null);
                    player_lng_degrees?: (number|null);
                }

                class GetRaidDetailsMessage implements IGetRaidDetailsMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IGetRaidDetailsMessage);
                    public raid_seed: (number|Long);
                    public gym_id: string;
                    public lobby_id: number[];
                    public player_lat_degrees: number;
                    public player_lng_degrees: number;
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IGetRaidDetailsMessage): POGOProtos.Networking.Requests.Messages.GetRaidDetailsMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IGetRaidDetailsMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IGetRaidDetailsMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.GetRaidDetailsMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.GetRaidDetailsMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.GetRaidDetailsMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.GetRaidDetailsMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IGymDeployMessage {
                    fort_id?: (string|null);
                    pokemon_id?: (number|Long|null);
                    player_latitude?: (number|null);
                    player_longitude?: (number|null);
                }

                class GymDeployMessage implements IGymDeployMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IGymDeployMessage);
                    public fort_id: string;
                    public pokemon_id: (number|Long);
                    public player_latitude: number;
                    public player_longitude: number;
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IGymDeployMessage): POGOProtos.Networking.Requests.Messages.GymDeployMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IGymDeployMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IGymDeployMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.GymDeployMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.GymDeployMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.GymDeployMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.GymDeployMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IGymFeedPokemonMessage {
                    item?: (POGOProtos.Inventory.Item.ItemId|null);
                    starting_quantity?: (number|null);
                    gym_id?: (string|null);
                    pokemon_id?: (number|Long|null);
                    player_lat_degrees?: (number|null);
                    player_lng_degrees?: (number|null);
                }

                class GymFeedPokemonMessage implements IGymFeedPokemonMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IGymFeedPokemonMessage);
                    public item: POGOProtos.Inventory.Item.ItemId;
                    public starting_quantity: number;
                    public gym_id: string;
                    public pokemon_id: (number|Long);
                    public player_lat_degrees: number;
                    public player_lng_degrees: number;
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IGymFeedPokemonMessage): POGOProtos.Networking.Requests.Messages.GymFeedPokemonMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IGymFeedPokemonMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IGymFeedPokemonMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.GymFeedPokemonMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.GymFeedPokemonMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.GymFeedPokemonMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.GymFeedPokemonMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IGymGetInfoMessage {
                    gym_id?: (string|null);
                    player_lat_degrees?: (number|null);
                    player_lng_degrees?: (number|null);
                    gym_lat_degrees?: (number|null);
                    gym_lng_degrees?: (number|null);
                }

                class GymGetInfoMessage implements IGymGetInfoMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IGymGetInfoMessage);
                    public gym_id: string;
                    public player_lat_degrees: number;
                    public player_lng_degrees: number;
                    public gym_lat_degrees: number;
                    public gym_lng_degrees: number;
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IGymGetInfoMessage): POGOProtos.Networking.Requests.Messages.GymGetInfoMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IGymGetInfoMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IGymGetInfoMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.GymGetInfoMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.GymGetInfoMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.GymGetInfoMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.GymGetInfoMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IIncenseEncounterMessage {
                    encounter_id?: (number|Long|null);
                    encounter_location?: (string|null);
                }

                class IncenseEncounterMessage implements IIncenseEncounterMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IIncenseEncounterMessage);
                    public encounter_id: (number|Long);
                    public encounter_location: string;
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IIncenseEncounterMessage): POGOProtos.Networking.Requests.Messages.IncenseEncounterMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IIncenseEncounterMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IIncenseEncounterMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.IncenseEncounterMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.IncenseEncounterMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.IncenseEncounterMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.IncenseEncounterMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface ILevelUpRewardsMessage {
                    level?: (number|null);
                }

                class LevelUpRewardsMessage implements ILevelUpRewardsMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.ILevelUpRewardsMessage);
                    public level: number;
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.ILevelUpRewardsMessage): POGOProtos.Networking.Requests.Messages.LevelUpRewardsMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.ILevelUpRewardsMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.ILevelUpRewardsMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.LevelUpRewardsMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.LevelUpRewardsMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.LevelUpRewardsMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.LevelUpRewardsMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IListAvatarCustomizationsMessage {
                    avatar_type?: (POGOProtos.Data.Player.PlayerAvatarType|null);
                    slot?: (POGOProtos.Enums.Slot[]|null);
                    filters?: (POGOProtos.Enums.Filter[]|null);
                    start?: (number|null);
                    limit?: (number|null);
                }

                class ListAvatarCustomizationsMessage implements IListAvatarCustomizationsMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IListAvatarCustomizationsMessage);
                    public avatar_type: POGOProtos.Data.Player.PlayerAvatarType;
                    public slot: POGOProtos.Enums.Slot[];
                    public filters: POGOProtos.Enums.Filter[];
                    public start: number;
                    public limit: number;
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IListAvatarCustomizationsMessage): POGOProtos.Networking.Requests.Messages.ListAvatarCustomizationsMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IListAvatarCustomizationsMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IListAvatarCustomizationsMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.ListAvatarCustomizationsMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.ListAvatarCustomizationsMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.ListAvatarCustomizationsMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.ListAvatarCustomizationsMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IListGymBadgesMessage {
                }

                class ListGymBadgesMessage implements IListGymBadgesMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IListGymBadgesMessage);
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IListGymBadgesMessage): POGOProtos.Networking.Requests.Messages.ListGymBadgesMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IListGymBadgesMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IListGymBadgesMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.ListGymBadgesMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.ListGymBadgesMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.ListGymBadgesMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.ListGymBadgesMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IMarkReadNewsArticleMessage {
                    news_ids?: (string[]|null);
                }

                class MarkReadNewsArticleMessage implements IMarkReadNewsArticleMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IMarkReadNewsArticleMessage);
                    public news_ids: string[];
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IMarkReadNewsArticleMessage): POGOProtos.Networking.Requests.Messages.MarkReadNewsArticleMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IMarkReadNewsArticleMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IMarkReadNewsArticleMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.MarkReadNewsArticleMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.MarkReadNewsArticleMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.MarkReadNewsArticleMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.MarkReadNewsArticleMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IMarkTutorialCompleteMessage {
                    tutorials_completed?: (POGOProtos.Enums.TutorialState[]|null);
                    send_marketing_emails?: (boolean|null);
                    send_push_notifications?: (boolean|null);
                }

                class MarkTutorialCompleteMessage implements IMarkTutorialCompleteMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IMarkTutorialCompleteMessage);
                    public tutorials_completed: POGOProtos.Enums.TutorialState[];
                    public send_marketing_emails: boolean;
                    public send_push_notifications: boolean;
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IMarkTutorialCompleteMessage): POGOProtos.Networking.Requests.Messages.MarkTutorialCompleteMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IMarkTutorialCompleteMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IMarkTutorialCompleteMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.MarkTutorialCompleteMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.MarkTutorialCompleteMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.MarkTutorialCompleteMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.MarkTutorialCompleteMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface INicknamePokemonMessage {
                    pokemon_id?: (number|Long|null);
                    nickname?: (string|null);
                }

                class NicknamePokemonMessage implements INicknamePokemonMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.INicknamePokemonMessage);
                    public pokemon_id: (number|Long);
                    public nickname: string;
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.INicknamePokemonMessage): POGOProtos.Networking.Requests.Messages.NicknamePokemonMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.INicknamePokemonMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.INicknamePokemonMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.NicknamePokemonMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.NicknamePokemonMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.NicknamePokemonMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.NicknamePokemonMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IRegisterPushNotificationMessage {
                    apn_token?: (POGOProtos.Networking.Requests.Messages.RegisterPushNotificationMessage.IApnToken|null);
                    gcm_token?: (POGOProtos.Networking.Requests.Messages.RegisterPushNotificationMessage.IGcmToken|null);
                }

                class RegisterPushNotificationMessage implements IRegisterPushNotificationMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IRegisterPushNotificationMessage);
                    public apn_token?: (POGOProtos.Networking.Requests.Messages.RegisterPushNotificationMessage.IApnToken|null);
                    public gcm_token?: (POGOProtos.Networking.Requests.Messages.RegisterPushNotificationMessage.IGcmToken|null);
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IRegisterPushNotificationMessage): POGOProtos.Networking.Requests.Messages.RegisterPushNotificationMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IRegisterPushNotificationMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IRegisterPushNotificationMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.RegisterPushNotificationMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.RegisterPushNotificationMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.RegisterPushNotificationMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.RegisterPushNotificationMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                namespace RegisterPushNotificationMessage {

                    interface IApnToken {
                        registration_id?: (string|null);
                        bundle_identifier?: (string|null);
                        payload_byte_size?: (number|null);
                    }

                    class ApnToken implements IApnToken {
                        constructor(properties?: POGOProtos.Networking.Requests.Messages.RegisterPushNotificationMessage.IApnToken);
                        public registration_id: string;
                        public bundle_identifier: string;
                        public payload_byte_size: number;
                        public static create(properties?: POGOProtos.Networking.Requests.Messages.RegisterPushNotificationMessage.IApnToken): POGOProtos.Networking.Requests.Messages.RegisterPushNotificationMessage.ApnToken;
                        public static encode(message: POGOProtos.Networking.Requests.Messages.RegisterPushNotificationMessage.IApnToken, writer?: $protobuf.Writer): $protobuf.Writer;
                        public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.RegisterPushNotificationMessage.IApnToken, writer?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.RegisterPushNotificationMessage.ApnToken;
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.RegisterPushNotificationMessage.ApnToken;
                        public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.RegisterPushNotificationMessage.ApnToken;
                        public static toObject(message: POGOProtos.Networking.Requests.Messages.RegisterPushNotificationMessage.ApnToken, options?: $protobuf.IConversionOptions): { [k: string]: any };
                        public toJSON(): { [k: string]: any };
                    }

                    interface IGcmToken {
                        registration_id?: (string|null);
                    }

                    class GcmToken implements IGcmToken {
                        constructor(properties?: POGOProtos.Networking.Requests.Messages.RegisterPushNotificationMessage.IGcmToken);
                        public registration_id: string;
                        public static create(properties?: POGOProtos.Networking.Requests.Messages.RegisterPushNotificationMessage.IGcmToken): POGOProtos.Networking.Requests.Messages.RegisterPushNotificationMessage.GcmToken;
                        public static encode(message: POGOProtos.Networking.Requests.Messages.RegisterPushNotificationMessage.IGcmToken, writer?: $protobuf.Writer): $protobuf.Writer;
                        public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.RegisterPushNotificationMessage.IGcmToken, writer?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.RegisterPushNotificationMessage.GcmToken;
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.RegisterPushNotificationMessage.GcmToken;
                        public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.RegisterPushNotificationMessage.GcmToken;
                        public static toObject(message: POGOProtos.Networking.Requests.Messages.RegisterPushNotificationMessage.GcmToken, options?: $protobuf.IConversionOptions): { [k: string]: any };
                        public toJSON(): { [k: string]: any };
                    }
                }

                interface IUpdateNotificationStatusMessage {
                    notification_ids?: (string[]|null);
                    create_timestamp_ms?: ((number|Long)[]|null);
                    state?: (POGOProtos.Networking.Requests.Messages.UpdateNotificationStatusMessage.NotificationState|null);
                }

                class UpdateNotificationStatusMessage implements IUpdateNotificationStatusMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IUpdateNotificationStatusMessage);
                    public notification_ids: string[];
                    public create_timestamp_ms: (number|Long)[];
                    public state: POGOProtos.Networking.Requests.Messages.UpdateNotificationStatusMessage.NotificationState;
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IUpdateNotificationStatusMessage): POGOProtos.Networking.Requests.Messages.UpdateNotificationStatusMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IUpdateNotificationStatusMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IUpdateNotificationStatusMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.UpdateNotificationStatusMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.UpdateNotificationStatusMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.UpdateNotificationStatusMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.UpdateNotificationStatusMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                namespace UpdateNotificationStatusMessage {

                    enum NotificationState {
                        UNSET_STATE = 0,
                        VIEWED = 1
                    }
                }

                interface IOptOutPushNotificationCategoryMessage {
                    categories?: (string[]|null);
                }

                class OptOutPushNotificationCategoryMessage implements IOptOutPushNotificationCategoryMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IOptOutPushNotificationCategoryMessage);
                    public categories: string[];
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IOptOutPushNotificationCategoryMessage): POGOProtos.Networking.Requests.Messages.OptOutPushNotificationCategoryMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IOptOutPushNotificationCategoryMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IOptOutPushNotificationCategoryMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.OptOutPushNotificationCategoryMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.OptOutPushNotificationCategoryMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.OptOutPushNotificationCategoryMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.OptOutPushNotificationCategoryMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IQuestEncounterMessage {
                    encounter_id?: (number|Long|null);
                    spawn_point_id?: (string|null);
                }

                class QuestEncounterMessage implements IQuestEncounterMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IQuestEncounterMessage);
                    public encounter_id: (number|Long);
                    public spawn_point_id: string;
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IQuestEncounterMessage): POGOProtos.Networking.Requests.Messages.QuestEncounterMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IQuestEncounterMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IQuestEncounterMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.QuestEncounterMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.QuestEncounterMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.QuestEncounterMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.QuestEncounterMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IRecycleInventoryItemMessage {
                    item_id?: (POGOProtos.Inventory.Item.ItemId|null);
                    count?: (number|null);
                }

                class RecycleInventoryItemMessage implements IRecycleInventoryItemMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IRecycleInventoryItemMessage);
                    public item_id: POGOProtos.Inventory.Item.ItemId;
                    public count: number;
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IRecycleInventoryItemMessage): POGOProtos.Networking.Requests.Messages.RecycleInventoryItemMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IRecycleInventoryItemMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IRecycleInventoryItemMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.RecycleInventoryItemMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.RecycleInventoryItemMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.RecycleInventoryItemMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.RecycleInventoryItemMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IRedeemPasscodeRequestMessage {
                    passcode?: (string|null);
                }

                class RedeemPasscodeRequestMessage implements IRedeemPasscodeRequestMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IRedeemPasscodeRequestMessage);
                    public passcode: string;
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IRedeemPasscodeRequestMessage): POGOProtos.Networking.Requests.Messages.RedeemPasscodeRequestMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IRedeemPasscodeRequestMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IRedeemPasscodeRequestMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.RedeemPasscodeRequestMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.RedeemPasscodeRequestMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.RedeemPasscodeRequestMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.RedeemPasscodeRequestMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IRegisterBackgroundDeviceMessage {
                    device_type?: (string|null);
                    device_id?: (string|null);
                }

                class RegisterBackgroundDeviceMessage implements IRegisterBackgroundDeviceMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IRegisterBackgroundDeviceMessage);
                    public device_type: string;
                    public device_id: string;
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IRegisterBackgroundDeviceMessage): POGOProtos.Networking.Requests.Messages.RegisterBackgroundDeviceMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IRegisterBackgroundDeviceMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IRegisterBackgroundDeviceMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.RegisterBackgroundDeviceMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.RegisterBackgroundDeviceMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.RegisterBackgroundDeviceMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.RegisterBackgroundDeviceMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IReleasePokemonMessage {
                    pokemon_id?: (number|Long|null);
                    pokemon_ids?: ((number|Long)[]|null);
                }

                class ReleasePokemonMessage implements IReleasePokemonMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IReleasePokemonMessage);
                    public pokemon_id: (number|Long);
                    public pokemon_ids: (number|Long)[];
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IReleasePokemonMessage): POGOProtos.Networking.Requests.Messages.ReleasePokemonMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IReleasePokemonMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IReleasePokemonMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.ReleasePokemonMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.ReleasePokemonMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.ReleasePokemonMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.ReleasePokemonMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IRemoveQuestMessage {
                    quest_id?: (string|null);
                }

                class RemoveQuestMessage implements IRemoveQuestMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IRemoveQuestMessage);
                    public quest_id: string;
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IRemoveQuestMessage): POGOProtos.Networking.Requests.Messages.RemoveQuestMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IRemoveQuestMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IRemoveQuestMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.RemoveQuestMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.RemoveQuestMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.RemoveQuestMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.RemoveQuestMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface ISetAvatarItemAsViewedMessage {
                    avatar_template_id?: (string[]|null);
                }

                class SetAvatarItemAsViewedMessage implements ISetAvatarItemAsViewedMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.ISetAvatarItemAsViewedMessage);
                    public avatar_template_id: string[];
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.ISetAvatarItemAsViewedMessage): POGOProtos.Networking.Requests.Messages.SetAvatarItemAsViewedMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.ISetAvatarItemAsViewedMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.ISetAvatarItemAsViewedMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.SetAvatarItemAsViewedMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.SetAvatarItemAsViewedMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.SetAvatarItemAsViewedMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.SetAvatarItemAsViewedMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface ISetAvatarMessage {
                    player_avatar?: (POGOProtos.Data.Player.IPlayerAvatar|null);
                }

                class SetAvatarMessage implements ISetAvatarMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.ISetAvatarMessage);
                    public player_avatar?: (POGOProtos.Data.Player.IPlayerAvatar|null);
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.ISetAvatarMessage): POGOProtos.Networking.Requests.Messages.SetAvatarMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.ISetAvatarMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.ISetAvatarMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.SetAvatarMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.SetAvatarMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.SetAvatarMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.SetAvatarMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface ISetBuddyPokemonMessage {
                    pokemon_id?: (number|Long|null);
                }

                class SetBuddyPokemonMessage implements ISetBuddyPokemonMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.ISetBuddyPokemonMessage);
                    public pokemon_id: (number|Long);
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.ISetBuddyPokemonMessage): POGOProtos.Networking.Requests.Messages.SetBuddyPokemonMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.ISetBuddyPokemonMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.ISetBuddyPokemonMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.SetBuddyPokemonMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.SetBuddyPokemonMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.SetBuddyPokemonMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.SetBuddyPokemonMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface ISetContactSettingsMessage {
                    contact_settings?: (POGOProtos.Data.Player.IContactSettings|null);
                }

                class SetContactSettingsMessage implements ISetContactSettingsMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.ISetContactSettingsMessage);
                    public contact_settings?: (POGOProtos.Data.Player.IContactSettings|null);
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.ISetContactSettingsMessage): POGOProtos.Networking.Requests.Messages.SetContactSettingsMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.ISetContactSettingsMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.ISetContactSettingsMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.SetContactSettingsMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.SetContactSettingsMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.SetContactSettingsMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.SetContactSettingsMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface ISetFavoritePokemonMessage {
                    pokemon_id?: (number|Long|null);
                    is_favorite?: (boolean|null);
                }

                class SetFavoritePokemonMessage implements ISetFavoritePokemonMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.ISetFavoritePokemonMessage);
                    public pokemon_id: (number|Long);
                    public is_favorite: boolean;
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.ISetFavoritePokemonMessage): POGOProtos.Networking.Requests.Messages.SetFavoritePokemonMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.ISetFavoritePokemonMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.ISetFavoritePokemonMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.SetFavoritePokemonMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.SetFavoritePokemonMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.SetFavoritePokemonMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.SetFavoritePokemonMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface ISetPlayerTeamMessage {
                    team?: (POGOProtos.Enums.TeamColor|null);
                }

                class SetPlayerTeamMessage implements ISetPlayerTeamMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.ISetPlayerTeamMessage);
                    public team: POGOProtos.Enums.TeamColor;
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.ISetPlayerTeamMessage): POGOProtos.Networking.Requests.Messages.SetPlayerTeamMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.ISetPlayerTeamMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.ISetPlayerTeamMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.SetPlayerTeamMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.SetPlayerTeamMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.SetPlayerTeamMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.SetPlayerTeamMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface ISfidaActionLogMessage {
                }

                class SfidaActionLogMessage implements ISfidaActionLogMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.ISfidaActionLogMessage);
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.ISfidaActionLogMessage): POGOProtos.Networking.Requests.Messages.SfidaActionLogMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.ISfidaActionLogMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.ISfidaActionLogMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.SfidaActionLogMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.SfidaActionLogMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.SfidaActionLogMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.SfidaActionLogMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface ISfidaRegistrationMessage {
                    sfida_id?: (string|null);
                }

                class SfidaRegistrationMessage implements ISfidaRegistrationMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.ISfidaRegistrationMessage);
                    public sfida_id: string;
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.ISfidaRegistrationMessage): POGOProtos.Networking.Requests.Messages.SfidaRegistrationMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.ISfidaRegistrationMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.ISfidaRegistrationMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.SfidaRegistrationMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.SfidaRegistrationMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.SfidaRegistrationMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.SfidaRegistrationMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IStartGymBattleMessage {
                    gym_id?: (string|null);
                    attacking_pokemon_ids?: ((number|Long)[]|null);
                    defending_pokemon_id?: (number|Long|null);
                    player_latitude?: (number|null);
                    player_longitude?: (number|null);
                }

                class StartGymBattleMessage implements IStartGymBattleMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IStartGymBattleMessage);
                    public gym_id: string;
                    public attacking_pokemon_ids: (number|Long)[];
                    public defending_pokemon_id: (number|Long);
                    public player_latitude: number;
                    public player_longitude: number;
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IStartGymBattleMessage): POGOProtos.Networking.Requests.Messages.StartGymBattleMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IStartGymBattleMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IStartGymBattleMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.StartGymBattleMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.StartGymBattleMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.StartGymBattleMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.StartGymBattleMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IUpdateNotificationMessage {
                    notification_ids?: (string[]|null);
                    create_timestamp_ms?: ((number|Long)[]|null);
                    state?: (POGOProtos.Enums.NotificationState|null);
                }

                class UpdateNotificationMessage implements IUpdateNotificationMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IUpdateNotificationMessage);
                    public notification_ids: string[];
                    public create_timestamp_ms: (number|Long)[];
                    public state: POGOProtos.Enums.NotificationState;
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IUpdateNotificationMessage): POGOProtos.Networking.Requests.Messages.UpdateNotificationMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IUpdateNotificationMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IUpdateNotificationMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.UpdateNotificationMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.UpdateNotificationMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.UpdateNotificationMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.UpdateNotificationMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IUpgradePokemonMessage {
                    pokemon_id?: (number|Long|null);
                }

                class UpgradePokemonMessage implements IUpgradePokemonMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IUpgradePokemonMessage);
                    public pokemon_id: (number|Long);
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IUpgradePokemonMessage): POGOProtos.Networking.Requests.Messages.UpgradePokemonMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IUpgradePokemonMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IUpgradePokemonMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.UpgradePokemonMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.UpgradePokemonMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.UpgradePokemonMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.UpgradePokemonMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IUseIncenseMessage {
                    incense_type?: (POGOProtos.Inventory.Item.ItemId|null);
                }

                class UseIncenseMessage implements IUseIncenseMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IUseIncenseMessage);
                    public incense_type: POGOProtos.Inventory.Item.ItemId;
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IUseIncenseMessage): POGOProtos.Networking.Requests.Messages.UseIncenseMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IUseIncenseMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IUseIncenseMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.UseIncenseMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.UseIncenseMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.UseIncenseMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.UseIncenseMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IUseItemCaptureMessage {
                    item_id?: (POGOProtos.Inventory.Item.ItemId|null);
                    encounter_id?: (number|Long|null);
                    spawn_point_id?: (string|null);
                }

                class UseItemCaptureMessage implements IUseItemCaptureMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IUseItemCaptureMessage);
                    public item_id: POGOProtos.Inventory.Item.ItemId;
                    public encounter_id: (number|Long);
                    public spawn_point_id: string;
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IUseItemCaptureMessage): POGOProtos.Networking.Requests.Messages.UseItemCaptureMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IUseItemCaptureMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IUseItemCaptureMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.UseItemCaptureMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.UseItemCaptureMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.UseItemCaptureMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.UseItemCaptureMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IUseItemEggIncubatorMessage {
                    item_id?: (string|null);
                    pokemon_id?: (number|Long|null);
                }

                class UseItemEggIncubatorMessage implements IUseItemEggIncubatorMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IUseItemEggIncubatorMessage);
                    public item_id: string;
                    public pokemon_id: (number|Long);
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IUseItemEggIncubatorMessage): POGOProtos.Networking.Requests.Messages.UseItemEggIncubatorMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IUseItemEggIncubatorMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IUseItemEggIncubatorMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.UseItemEggIncubatorMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.UseItemEggIncubatorMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.UseItemEggIncubatorMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.UseItemEggIncubatorMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IUseItemEncounterMessage {
                    item?: (POGOProtos.Inventory.Item.ItemId|null);
                    encounter_id?: (number|Long|null);
                    spawn_point_guid?: (string|null);
                }

                class UseItemEncounterMessage implements IUseItemEncounterMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IUseItemEncounterMessage);
                    public item: POGOProtos.Inventory.Item.ItemId;
                    public encounter_id: (number|Long);
                    public spawn_point_guid: string;
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IUseItemEncounterMessage): POGOProtos.Networking.Requests.Messages.UseItemEncounterMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IUseItemEncounterMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IUseItemEncounterMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.UseItemEncounterMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.UseItemEncounterMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.UseItemEncounterMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.UseItemEncounterMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IUseItemGymMessage {
                    item_id?: (POGOProtos.Inventory.Item.ItemId|null);
                    gym_id?: (string|null);
                    player_latitude?: (number|null);
                    player_longitude?: (number|null);
                }

                class UseItemGymMessage implements IUseItemGymMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IUseItemGymMessage);
                    public item_id: POGOProtos.Inventory.Item.ItemId;
                    public gym_id: string;
                    public player_latitude: number;
                    public player_longitude: number;
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IUseItemGymMessage): POGOProtos.Networking.Requests.Messages.UseItemGymMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IUseItemGymMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IUseItemGymMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.UseItemGymMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.UseItemGymMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.UseItemGymMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.UseItemGymMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IUseItemMoveRerollMessage {
                    item_id?: (POGOProtos.Inventory.Item.ItemId|null);
                    pokemon_id?: (number|Long|null);
                }

                class UseItemMoveRerollMessage implements IUseItemMoveRerollMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IUseItemMoveRerollMessage);
                    public item_id: POGOProtos.Inventory.Item.ItemId;
                    public pokemon_id: (number|Long);
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IUseItemMoveRerollMessage): POGOProtos.Networking.Requests.Messages.UseItemMoveRerollMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IUseItemMoveRerollMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IUseItemMoveRerollMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.UseItemMoveRerollMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.UseItemMoveRerollMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.UseItemMoveRerollMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.UseItemMoveRerollMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IUseItemPotionMessage {
                    item_id?: (POGOProtos.Inventory.Item.ItemId|null);
                    pokemon_id?: (number|Long|null);
                }

                class UseItemPotionMessage implements IUseItemPotionMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IUseItemPotionMessage);
                    public item_id: POGOProtos.Inventory.Item.ItemId;
                    public pokemon_id: (number|Long);
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IUseItemPotionMessage): POGOProtos.Networking.Requests.Messages.UseItemPotionMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IUseItemPotionMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IUseItemPotionMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.UseItemPotionMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.UseItemPotionMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.UseItemPotionMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.UseItemPotionMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IUseItemRareCandyMessage {
                    item_id?: (POGOProtos.Inventory.Item.ItemId|null);
                    pokemon_id?: (POGOProtos.Enums.PokemonId|null);
                }

                class UseItemRareCandyMessage implements IUseItemRareCandyMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IUseItemRareCandyMessage);
                    public item_id: POGOProtos.Inventory.Item.ItemId;
                    public pokemon_id: POGOProtos.Enums.PokemonId;
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IUseItemRareCandyMessage): POGOProtos.Networking.Requests.Messages.UseItemRareCandyMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IUseItemRareCandyMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IUseItemRareCandyMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.UseItemRareCandyMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.UseItemRareCandyMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.UseItemRareCandyMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.UseItemRareCandyMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IUseItemReviveMessage {
                    item_id?: (POGOProtos.Inventory.Item.ItemId|null);
                    pokemon_id?: (number|Long|null);
                }

                class UseItemReviveMessage implements IUseItemReviveMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IUseItemReviveMessage);
                    public item_id: POGOProtos.Inventory.Item.ItemId;
                    public pokemon_id: (number|Long);
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IUseItemReviveMessage): POGOProtos.Networking.Requests.Messages.UseItemReviveMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IUseItemReviveMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IUseItemReviveMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.UseItemReviveMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.UseItemReviveMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.UseItemReviveMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.UseItemReviveMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IUseItemStardustBoostMessage {
                    item?: (POGOProtos.Inventory.Item.ItemId|null);
                }

                class UseItemStardustBoostMessage implements IUseItemStardustBoostMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IUseItemStardustBoostMessage);
                    public item: POGOProtos.Inventory.Item.ItemId;
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IUseItemStardustBoostMessage): POGOProtos.Networking.Requests.Messages.UseItemStardustBoostMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IUseItemStardustBoostMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IUseItemStardustBoostMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.UseItemStardustBoostMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.UseItemStardustBoostMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.UseItemStardustBoostMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.UseItemStardustBoostMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IUseItemXpBoostMessage {
                    item_id?: (POGOProtos.Inventory.Item.ItemId|null);
                }

                class UseItemXpBoostMessage implements IUseItemXpBoostMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IUseItemXpBoostMessage);
                    public item_id: POGOProtos.Inventory.Item.ItemId;
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IUseItemXpBoostMessage): POGOProtos.Networking.Requests.Messages.UseItemXpBoostMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IUseItemXpBoostMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IUseItemXpBoostMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.UseItemXpBoostMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.UseItemXpBoostMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.UseItemXpBoostMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.UseItemXpBoostMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IVerifyChallengeMessage {
                    token?: (string|null);
                }

                class VerifyChallengeMessage implements IVerifyChallengeMessage {
                    constructor(properties?: POGOProtos.Networking.Requests.Messages.IVerifyChallengeMessage);
                    public token: string;
                    public static create(properties?: POGOProtos.Networking.Requests.Messages.IVerifyChallengeMessage): POGOProtos.Networking.Requests.Messages.VerifyChallengeMessage;
                    public static encode(message: POGOProtos.Networking.Requests.Messages.IVerifyChallengeMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Requests.Messages.IVerifyChallengeMessage, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Messages.VerifyChallengeMessage;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Messages.VerifyChallengeMessage;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Messages.VerifyChallengeMessage;
                    public static toObject(message: POGOProtos.Networking.Requests.Messages.VerifyChallengeMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }
            }

            interface IRequest {
                request_type?: (POGOProtos.Networking.Requests.RequestType|null);
                request_message?: (Uint8Array|null);
            }

            class Request implements IRequest {
                constructor(properties?: POGOProtos.Networking.Requests.IRequest);
                public request_type: POGOProtos.Networking.Requests.RequestType;
                public request_message: Uint8Array;
                public static create(properties?: POGOProtos.Networking.Requests.IRequest): POGOProtos.Networking.Requests.Request;
                public static encode(message: POGOProtos.Networking.Requests.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Requests.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Requests.Request;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Requests.Request;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Requests.Request;
                public static toObject(message: POGOProtos.Networking.Requests.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            enum RequestType {
                METHOD_UNSET = 0,
                GET_PLAYER = 2,
                GET_HOLO_INVENTORY = 4,
                DOWNLOAD_SETTINGS = 5,
                DOWNLOAD_ITEM_TEMPLATES = 6,
                DOWNLOAD_REMOTE_CONFIG_VERSION = 7,
                REGISTER_BACKGROUND_DEVICE = 8,
                FORT_SEARCH = 101,
                ENCOUNTER = 102,
                CATCH_POKEMON = 103,
                FORT_DETAILS = 104,
                GET_MAP_OBJECTS = 106,
                FORT_DEPLOY_POKEMON = 110,
                FORT_RECALL_POKEMON = 111,
                RELEASE_POKEMON = 112,
                USE_ITEM_POTION = 113,
                USE_ITEM_CAPTURE = 114,
                USE_ITEM_FLEE = 115,
                USE_ITEM_REVIVE = 116,
                GET_PLAYER_PROFILE = 121,
                EVOLVE_POKEMON = 125,
                GET_HATCHED_EGGS = 126,
                ENCOUNTER_TUTORIAL_COMPLETE = 127,
                LEVEL_UP_REWARDS = 128,
                CHECK_AWARDED_BADGES = 129,
                USE_ITEM_GYM = 133,
                GET_GYM_DETAILS = 134,
                START_GYM_BATTLE = 135,
                ATTACK_GYM = 136,
                RECYCLE_INVENTORY_ITEM = 137,
                COLLECT_DAILY_BONUS = 138,
                USE_ITEM_XP_BOOST = 139,
                USE_ITEM_EGG_INCUBATOR = 140,
                USE_INCENSE = 141,
                GET_INCENSE_POKEMON = 142,
                INCENSE_ENCOUNTER = 143,
                ADD_FORT_MODIFIER = 144,
                DISK_ENCOUNTER = 145,
                COLLECT_DAILY_DEFENDER_BONUS = 146,
                UPGRADE_POKEMON = 147,
                SET_FAVORITE_POKEMON = 148,
                NICKNAME_POKEMON = 149,
                EQUIP_BADGE = 150,
                SET_CONTACT_SETTINGS = 151,
                SET_BUDDY_POKEMON = 152,
                GET_BUDDY_WALKED = 153,
                USE_ITEM_ENCOUNTER = 154,
                GYM_DEPLOY = 155,
                GYM_GET_INFO = 156,
                GYM_START_SESSION = 157,
                GYM_BATTLE_ATTACK = 158,
                JOIN_LOBBY = 159,
                LEAVE_LOBBY = 160,
                SET_LOBBY_VISIBILITY = 161,
                SET_LOBBY_POKEMON = 162,
                GET_RAID_DETAILS = 163,
                GYM_FEED_POKEMON = 164,
                START_RAID_BATTLE = 165,
                ATTACK_RAID = 166,
                AWARD_POKECOIN = 167,
                USE_ITEM_STARDUST_BOOST = 168,
                GET_ASSET_DIGEST = 300,
                GET_DOWNLOAD_URLS = 301,
                CLAIM_CODENAME = 403,
                SET_AVATAR = 404,
                SET_PLAYER_TEAM = 405,
                MARK_TUTORIAL_COMPLETE = 406,
                UPDATE_PERFORMANCE_METRICS = 407,
                CHECK_CHALLENGE = 600,
                VERIFY_CHALLENGE = 601,
                ECHO = 666,
                SFIDA_REGISTRATION = 800,
                SFIDA_ACTION_LOG = 801,
                SFIDA_CERTIFICATION = 802,
                SFIDA_UPDATE = 803,
                SFIDA_ACTION = 804,
                SFIDA_DOWSER = 805,
                SFIDA_CAPTURE = 806,
                LIST_AVATAR_CUSTOMIZATIONS = 807,
                SET_AVATAR_ITEM_AS_VIEWED = 808,
                GET_INBOX = 809,
                LIST_GYM_BADGES = 811,
                GET_GYM_BADGE_DETAILS = 812,
                USE_ITEM_MOVE_REROLL = 813,
                USE_ITEM_RARE_CANDY = 814,
                AWARD_FREE_RAID_TICKET = 815,
                FETCH_ALL_NEWS = 816,
                MARK_READ_NEWS_ARTICLE = 817,
                GET_PLAYER_DISPLAY_INFO = 818,
                GET_NEW_QUESTS = 900,
                GET_QUEST_DETAILS = 901,
                COMPLETE_QUEST = 902,
                REMOVE_QUEST = 903,
                QUEST_ENCOUNTER = 904,
                COMPLETE_QUEST_STAMP_CARD = 905,
                REGISTER_PUSH_NOTIFICATION = 5000,
                UNREGISTER_PUSH_NOTIFICATION = 5001,
                UPDATE_NOTIFICATION_STATUS = 5002,
                OPT_OUT_PUSH_NOTIFICATION_CATEGORY = 5003,
                DOWNLOAD_GAME_MASTER_TEMPLATES = 5004,
                GET_INVENTORY = 5005
            }
        }

        namespace Responses {

            interface IAddFortModifierResponse {
                result?: (POGOProtos.Networking.Responses.AddFortModifierResponse.Result|null);
                fort_details?: (POGOProtos.Networking.Responses.IFortDetailsResponse|null);
            }

            class AddFortModifierResponse implements IAddFortModifierResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IAddFortModifierResponse);
                public result: POGOProtos.Networking.Responses.AddFortModifierResponse.Result;
                public fort_details?: (POGOProtos.Networking.Responses.IFortDetailsResponse|null);
                public static create(properties?: POGOProtos.Networking.Responses.IAddFortModifierResponse): POGOProtos.Networking.Responses.AddFortModifierResponse;
                public static encode(message: POGOProtos.Networking.Responses.IAddFortModifierResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IAddFortModifierResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.AddFortModifierResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.AddFortModifierResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.AddFortModifierResponse;
                public static toObject(message: POGOProtos.Networking.Responses.AddFortModifierResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace AddFortModifierResponse {

                enum Result {
                    NO_RESULT_SET = 0,
                    SUCCESS = 1,
                    FORT_ALREADY_HAS_MODIFIER = 2,
                    TOO_FAR_AWAY = 3,
                    NO_ITEM_IN_INVENTORY = 4,
                    POI_INACCESSIBLE = 5
                }
            }

            interface IAttackGymResponse {
                result?: (POGOProtos.Networking.Responses.AttackGymResponse.Result|null);
                battle_log?: (POGOProtos.Data.Battle.IBattleLog|null);
                battle_id?: (string|null);
                active_defender?: (POGOProtos.Data.Battle.IBattlePokemonInfo|null);
                active_attacker?: (POGOProtos.Data.Battle.IBattlePokemonInfo|null);
                battle_update?: (POGOProtos.Data.Battle.IBattleUpdate|null);
            }

            class AttackGymResponse implements IAttackGymResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IAttackGymResponse);
                public result: POGOProtos.Networking.Responses.AttackGymResponse.Result;
                public battle_log?: (POGOProtos.Data.Battle.IBattleLog|null);
                public battle_id: string;
                public active_defender?: (POGOProtos.Data.Battle.IBattlePokemonInfo|null);
                public active_attacker?: (POGOProtos.Data.Battle.IBattlePokemonInfo|null);
                public battle_update?: (POGOProtos.Data.Battle.IBattleUpdate|null);
                public static create(properties?: POGOProtos.Networking.Responses.IAttackGymResponse): POGOProtos.Networking.Responses.AttackGymResponse;
                public static encode(message: POGOProtos.Networking.Responses.IAttackGymResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IAttackGymResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.AttackGymResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.AttackGymResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.AttackGymResponse;
                public static toObject(message: POGOProtos.Networking.Responses.AttackGymResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace AttackGymResponse {

                enum Result {
                    UNSET = 0,
                    SUCCESS = 1,
                    ERROR_INVALID_ATTACK_ACTIONS = 2,
                    ERROR_NOT_IN_RANGE = 3
                }
            }

            interface IAwardFreeRaidTicketResponse {
                result?: (POGOProtos.Networking.Responses.AwardFreeRaidTicketResponse.Result|null);
            }

            class AwardFreeRaidTicketResponse implements IAwardFreeRaidTicketResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IAwardFreeRaidTicketResponse);
                public result: POGOProtos.Networking.Responses.AwardFreeRaidTicketResponse.Result;
                public static create(properties?: POGOProtos.Networking.Responses.IAwardFreeRaidTicketResponse): POGOProtos.Networking.Responses.AwardFreeRaidTicketResponse;
                public static encode(message: POGOProtos.Networking.Responses.IAwardFreeRaidTicketResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IAwardFreeRaidTicketResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.AwardFreeRaidTicketResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.AwardFreeRaidTicketResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.AwardFreeRaidTicketResponse;
                public static toObject(message: POGOProtos.Networking.Responses.AwardFreeRaidTicketResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace AwardFreeRaidTicketResponse {

                enum Result {
                    NO_RESULT_SET = 0,
                    SUCCESS = 1,
                    ERROR_PLAYER_DOES_NOT_MEET_MIN_LEVEL = 2,
                    ERROR_DAILY_TICKET_ALREADY_AWARDED = 3,
                    ERROR_PLAYER_OUT_OF_RANGE = 4
                }
            }

            interface ICatchPokemonResponse {
                status?: (POGOProtos.Networking.Responses.CatchPokemonResponse.CatchStatus|null);
                miss_percent?: (number|null);
                captured_pokemon_id?: (number|Long|null);
                capture_award?: (POGOProtos.Data.Capture.ICaptureAward|null);
                capture_reason?: (POGOProtos.Networking.Responses.CatchPokemonResponse.CaptureReason|null);
                display_pokedex_id?: (number|null);
                throws_remaining?: (number|null);
                pokemon_display?: (POGOProtos.Data.IPokemonDisplay|null);
            }

            class CatchPokemonResponse implements ICatchPokemonResponse {
                constructor(properties?: POGOProtos.Networking.Responses.ICatchPokemonResponse);
                public status: POGOProtos.Networking.Responses.CatchPokemonResponse.CatchStatus;
                public miss_percent: number;
                public captured_pokemon_id: (number|Long);
                public capture_award?: (POGOProtos.Data.Capture.ICaptureAward|null);
                public capture_reason: POGOProtos.Networking.Responses.CatchPokemonResponse.CaptureReason;
                public display_pokedex_id: number;
                public throws_remaining: number;
                public pokemon_display?: (POGOProtos.Data.IPokemonDisplay|null);
                public static create(properties?: POGOProtos.Networking.Responses.ICatchPokemonResponse): POGOProtos.Networking.Responses.CatchPokemonResponse;
                public static encode(message: POGOProtos.Networking.Responses.ICatchPokemonResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.ICatchPokemonResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.CatchPokemonResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.CatchPokemonResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.CatchPokemonResponse;
                public static toObject(message: POGOProtos.Networking.Responses.CatchPokemonResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace CatchPokemonResponse {

                enum CatchStatus {
                    CATCH_ERROR = 0,
                    CATCH_SUCCESS = 1,
                    CATCH_ESCAPE = 2,
                    CATCH_FLEE = 3,
                    CATCH_MISSED = 4
                }

                enum CaptureReason {
                    UNSET = 0,
                    DEFAULT = 1,
                    ELEMENTAL_BADGE = 2,
                    CRITICAL_CATCH = 3
                }
            }

            interface ICheckAwardedBadgesResponse {
                success?: (boolean|null);
                awarded_badges?: (POGOProtos.Enums.BadgeType[]|null);
                awarded_badge_levels?: (number[]|null);
                avatar_template_ids?: (string[]|null);
            }

            class CheckAwardedBadgesResponse implements ICheckAwardedBadgesResponse {
                constructor(properties?: POGOProtos.Networking.Responses.ICheckAwardedBadgesResponse);
                public success: boolean;
                public awarded_badges: POGOProtos.Enums.BadgeType[];
                public awarded_badge_levels: number[];
                public avatar_template_ids: string[];
                public static create(properties?: POGOProtos.Networking.Responses.ICheckAwardedBadgesResponse): POGOProtos.Networking.Responses.CheckAwardedBadgesResponse;
                public static encode(message: POGOProtos.Networking.Responses.ICheckAwardedBadgesResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.ICheckAwardedBadgesResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.CheckAwardedBadgesResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.CheckAwardedBadgesResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.CheckAwardedBadgesResponse;
                public static toObject(message: POGOProtos.Networking.Responses.CheckAwardedBadgesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface ICheckChallengeResponse {
                show_challenge?: (boolean|null);
                challenge_url?: (string|null);
            }

            class CheckChallengeResponse implements ICheckChallengeResponse {
                constructor(properties?: POGOProtos.Networking.Responses.ICheckChallengeResponse);
                public show_challenge: boolean;
                public challenge_url: string;
                public static create(properties?: POGOProtos.Networking.Responses.ICheckChallengeResponse): POGOProtos.Networking.Responses.CheckChallengeResponse;
                public static encode(message: POGOProtos.Networking.Responses.ICheckChallengeResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.ICheckChallengeResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.CheckChallengeResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.CheckChallengeResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.CheckChallengeResponse;
                public static toObject(message: POGOProtos.Networking.Responses.CheckChallengeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IClaimCodenameResponse {
                codename?: (string|null);
                user_message?: (string|null);
                is_assignable?: (boolean|null);
                status?: (POGOProtos.Networking.Responses.ClaimCodenameResponse.Status|null);
                updated_player?: (POGOProtos.Data.IPlayerData|null);
                suggested_codenames?: (string[]|null);
            }

            class ClaimCodenameResponse implements IClaimCodenameResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IClaimCodenameResponse);
                public codename: string;
                public user_message: string;
                public is_assignable: boolean;
                public status: POGOProtos.Networking.Responses.ClaimCodenameResponse.Status;
                public updated_player?: (POGOProtos.Data.IPlayerData|null);
                public suggested_codenames: string[];
                public static create(properties?: POGOProtos.Networking.Responses.IClaimCodenameResponse): POGOProtos.Networking.Responses.ClaimCodenameResponse;
                public static encode(message: POGOProtos.Networking.Responses.IClaimCodenameResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IClaimCodenameResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.ClaimCodenameResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.ClaimCodenameResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.ClaimCodenameResponse;
                public static toObject(message: POGOProtos.Networking.Responses.ClaimCodenameResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace ClaimCodenameResponse {

                enum Status {
                    UNSET = 0,
                    SUCCESS = 1,
                    CODENAME_NOT_AVAILABLE = 2,
                    CODENAME_NOT_VALID = 3,
                    CURRENT_OWNER = 4,
                    CODENAME_CHANGE_NOT_ALLOWED = 5
                }
            }

            interface ICollectDailyBonusResponse {
                result?: (POGOProtos.Networking.Responses.CollectDailyBonusResponse.Result|null);
            }

            class CollectDailyBonusResponse implements ICollectDailyBonusResponse {
                constructor(properties?: POGOProtos.Networking.Responses.ICollectDailyBonusResponse);
                public result: POGOProtos.Networking.Responses.CollectDailyBonusResponse.Result;
                public static create(properties?: POGOProtos.Networking.Responses.ICollectDailyBonusResponse): POGOProtos.Networking.Responses.CollectDailyBonusResponse;
                public static encode(message: POGOProtos.Networking.Responses.ICollectDailyBonusResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.ICollectDailyBonusResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.CollectDailyBonusResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.CollectDailyBonusResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.CollectDailyBonusResponse;
                public static toObject(message: POGOProtos.Networking.Responses.CollectDailyBonusResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace CollectDailyBonusResponse {

                enum Result {
                    UNSET = 0,
                    SUCCESS = 1,
                    FAILURE = 2,
                    TOO_SOON = 3
                }
            }

            interface ICollectDailyDefenderBonusResponse {
                result?: (POGOProtos.Networking.Responses.CollectDailyDefenderBonusResponse.Result|null);
                currency_type?: (string[]|null);
                currency_awarded?: (number[]|null);
                defenders_count?: (number|null);
            }

            class CollectDailyDefenderBonusResponse implements ICollectDailyDefenderBonusResponse {
                constructor(properties?: POGOProtos.Networking.Responses.ICollectDailyDefenderBonusResponse);
                public result: POGOProtos.Networking.Responses.CollectDailyDefenderBonusResponse.Result;
                public currency_type: string[];
                public currency_awarded: number[];
                public defenders_count: number;
                public static create(properties?: POGOProtos.Networking.Responses.ICollectDailyDefenderBonusResponse): POGOProtos.Networking.Responses.CollectDailyDefenderBonusResponse;
                public static encode(message: POGOProtos.Networking.Responses.ICollectDailyDefenderBonusResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.ICollectDailyDefenderBonusResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.CollectDailyDefenderBonusResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.CollectDailyDefenderBonusResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.CollectDailyDefenderBonusResponse;
                public static toObject(message: POGOProtos.Networking.Responses.CollectDailyDefenderBonusResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace CollectDailyDefenderBonusResponse {

                enum Result {
                    UNSET = 0,
                    SUCCESS = 1,
                    FAILURE = 2,
                    TOO_SOON = 3,
                    NO_DEFENDERS = 4
                }
            }

            interface ICompleteQuestResponse {
                status?: (POGOProtos.Networking.Responses.CompleteQuestResponse.Status|null);
                quest?: (POGOProtos.Data.Quests.IClientQuest|null);
                stamp?: (POGOProtos.Data.Quests.IQuestStamp[]|null);
            }

            class CompleteQuestResponse implements ICompleteQuestResponse {
                constructor(properties?: POGOProtos.Networking.Responses.ICompleteQuestResponse);
                public status: POGOProtos.Networking.Responses.CompleteQuestResponse.Status;
                public quest?: (POGOProtos.Data.Quests.IClientQuest|null);
                public stamp: POGOProtos.Data.Quests.IQuestStamp[];
                public static create(properties?: POGOProtos.Networking.Responses.ICompleteQuestResponse): POGOProtos.Networking.Responses.CompleteQuestResponse;
                public static encode(message: POGOProtos.Networking.Responses.ICompleteQuestResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.ICompleteQuestResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.CompleteQuestResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.CompleteQuestResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.CompleteQuestResponse;
                public static toObject(message: POGOProtos.Networking.Responses.CompleteQuestResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace CompleteQuestResponse {

                enum Status {
                    UNSET = 0,
                    SUCCESS = 1,
                    ERROR_QUEST_NOT_FOUND = 2,
                    ERROR_QUEST_STILL_IN_PROGRESS = 3,
                    ERROR_QUEST_ALREADY_COMPLETED = 4,
                    ERROR_SUBQUEST_NOT_FOUND = 5,
                    ERROR_SUBQUEST_STILL_IN_PROGRESS = 6,
                    ERROR_SUBQUEST_ALREADY_COMPLETED = 7,
                    ERROR_MULTIPART_STILL_IN_PROGRESS = 8,
                    ERROR_MULTIPART_ALREADY_COMPLETED = 9,
                    ERROR_REDEEM_COMPLETED_QUEST_STAMP_CARD_FIRST = 10
                }
            }

            interface ICompleteQuestStampCardResponse {
                status?: (POGOProtos.Networking.Responses.CompleteQuestStampCardResponse.Status|null);
                reward?: (POGOProtos.Data.Quests.IQuestReward[]|null);
            }

            class CompleteQuestStampCardResponse implements ICompleteQuestStampCardResponse {
                constructor(properties?: POGOProtos.Networking.Responses.ICompleteQuestStampCardResponse);
                public status: POGOProtos.Networking.Responses.CompleteQuestStampCardResponse.Status;
                public reward: POGOProtos.Data.Quests.IQuestReward[];
                public static create(properties?: POGOProtos.Networking.Responses.ICompleteQuestStampCardResponse): POGOProtos.Networking.Responses.CompleteQuestStampCardResponse;
                public static encode(message: POGOProtos.Networking.Responses.ICompleteQuestStampCardResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.ICompleteQuestStampCardResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.CompleteQuestStampCardResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.CompleteQuestStampCardResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.CompleteQuestStampCardResponse;
                public static toObject(message: POGOProtos.Networking.Responses.CompleteQuestStampCardResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace CompleteQuestStampCardResponse {

                enum Status {
                    UNSET = 0,
                    SUCCESS = 1,
                    ERROR_STILL_IN_PROGRESS = 2
                }
            }

            interface IDiskEncounterResponse {
                result?: (POGOProtos.Networking.Responses.DiskEncounterResponse.Result|null);
                pokemon_data?: (POGOProtos.Data.IPokemonData|null);
                capture_probability?: (POGOProtos.Data.Capture.ICaptureProbability|null);
                active_item?: (POGOProtos.Inventory.Item.ItemId|null);
                arplus_attempts_until_flee?: (number|null);
            }

            class DiskEncounterResponse implements IDiskEncounterResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IDiskEncounterResponse);
                public result: POGOProtos.Networking.Responses.DiskEncounterResponse.Result;
                public pokemon_data?: (POGOProtos.Data.IPokemonData|null);
                public capture_probability?: (POGOProtos.Data.Capture.ICaptureProbability|null);
                public active_item: POGOProtos.Inventory.Item.ItemId;
                public arplus_attempts_until_flee: number;
                public static create(properties?: POGOProtos.Networking.Responses.IDiskEncounterResponse): POGOProtos.Networking.Responses.DiskEncounterResponse;
                public static encode(message: POGOProtos.Networking.Responses.IDiskEncounterResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IDiskEncounterResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.DiskEncounterResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.DiskEncounterResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.DiskEncounterResponse;
                public static toObject(message: POGOProtos.Networking.Responses.DiskEncounterResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace DiskEncounterResponse {

                enum Result {
                    UNKNOWN = 0,
                    SUCCESS = 1,
                    NOT_AVAILABLE = 2,
                    NOT_IN_RANGE = 3,
                    ENCOUNTER_ALREADY_FINISHED = 4,
                    POKEMON_INVENTORY_FULL = 5
                }
            }

            interface IDownloadGmTemplatesResponse {
                result?: (POGOProtos.Networking.Responses.DownloadGmTemplatesResponse.Result|null);
                template?: (POGOProtos.Networking.Responses.DownloadGmTemplatesResponse.IClientGameMasterTemplate[]|null);
                deleted_template?: (string[]|null);
                batch_id?: (number|Long|null);
                page_offset?: (number|null);
            }

            class DownloadGmTemplatesResponse implements IDownloadGmTemplatesResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IDownloadGmTemplatesResponse);
                public result: POGOProtos.Networking.Responses.DownloadGmTemplatesResponse.Result;
                public template: POGOProtos.Networking.Responses.DownloadGmTemplatesResponse.IClientGameMasterTemplate[];
                public deleted_template: string[];
                public batch_id: (number|Long);
                public page_offset: number;
                public static create(properties?: POGOProtos.Networking.Responses.IDownloadGmTemplatesResponse): POGOProtos.Networking.Responses.DownloadGmTemplatesResponse;
                public static encode(message: POGOProtos.Networking.Responses.IDownloadGmTemplatesResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IDownloadGmTemplatesResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.DownloadGmTemplatesResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.DownloadGmTemplatesResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.DownloadGmTemplatesResponse;
                public static toObject(message: POGOProtos.Networking.Responses.DownloadGmTemplatesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace DownloadGmTemplatesResponse {

                enum Result {
                    UNSET = 0,
                    COMPLETE = 1,
                    MORE_RESULTS = 2,
                    BATCH_ID_NOT_LIVE = 3,
                    INVALID_BASIS_BATCH_ID = 4
                }

                interface IClientGameMasterTemplate {
                    template_id?: (string|null);
                    data?: (Uint8Array|null);
                }

                class ClientGameMasterTemplate implements IClientGameMasterTemplate {
                    constructor(properties?: POGOProtos.Networking.Responses.DownloadGmTemplatesResponse.IClientGameMasterTemplate);
                    public template_id: string;
                    public data: Uint8Array;
                    public static create(properties?: POGOProtos.Networking.Responses.DownloadGmTemplatesResponse.IClientGameMasterTemplate): POGOProtos.Networking.Responses.DownloadGmTemplatesResponse.ClientGameMasterTemplate;
                    public static encode(message: POGOProtos.Networking.Responses.DownloadGmTemplatesResponse.IClientGameMasterTemplate, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Responses.DownloadGmTemplatesResponse.IClientGameMasterTemplate, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.DownloadGmTemplatesResponse.ClientGameMasterTemplate;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.DownloadGmTemplatesResponse.ClientGameMasterTemplate;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.DownloadGmTemplatesResponse.ClientGameMasterTemplate;
                    public static toObject(message: POGOProtos.Networking.Responses.DownloadGmTemplatesResponse.ClientGameMasterTemplate, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }
            }

            interface IDownloadItemTemplatesResponse {
                result?: (POGOProtos.Networking.Responses.DownloadItemTemplatesResponse.Result|null);
                item_templates?: (POGOProtos.Networking.Responses.DownloadItemTemplatesResponse.IItemTemplate[]|null);
                timestamp_ms?: (number|Long|null);
                page_offset?: (number|null);
            }

            class DownloadItemTemplatesResponse implements IDownloadItemTemplatesResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IDownloadItemTemplatesResponse);
                public result: POGOProtos.Networking.Responses.DownloadItemTemplatesResponse.Result;
                public item_templates: POGOProtos.Networking.Responses.DownloadItemTemplatesResponse.IItemTemplate[];
                public timestamp_ms: (number|Long);
                public page_offset: number;
                public static create(properties?: POGOProtos.Networking.Responses.IDownloadItemTemplatesResponse): POGOProtos.Networking.Responses.DownloadItemTemplatesResponse;
                public static encode(message: POGOProtos.Networking.Responses.IDownloadItemTemplatesResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IDownloadItemTemplatesResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.DownloadItemTemplatesResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.DownloadItemTemplatesResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.DownloadItemTemplatesResponse;
                public static toObject(message: POGOProtos.Networking.Responses.DownloadItemTemplatesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace DownloadItemTemplatesResponse {

                interface IItemTemplate {
                    template_id?: (string|null);
                    pokemon_settings?: (POGOProtos.Settings.Master.IPokemonSettings|null);
                    item_settings?: (POGOProtos.Settings.Master.IItemSettings|null);
                    move_settings?: (POGOProtos.Settings.Master.IMoveSettings|null);
                    move_sequence_settings?: (POGOProtos.Settings.Master.IMoveSequenceSettings|null);
                    type_effective?: (POGOProtos.Settings.Master.ITypeEffectiveSettings|null);
                    badge_settings?: (POGOProtos.Settings.Master.IBadgeSettings|null);
                    camera?: (POGOProtos.Settings.Master.ICameraSettings|null);
                    player_level?: (POGOProtos.Settings.Master.IPlayerLevelSettings|null);
                    gym_level?: (POGOProtos.Settings.Master.IGymLevelSettings|null);
                    battle_settings?: (POGOProtos.Settings.Master.IGymBattleSettings|null);
                    encounter_settings?: (POGOProtos.Settings.Master.IEncounterSettings|null);
                    iap_item_display?: (POGOProtos.Settings.Master.IIapItemDisplay|null);
                    iap_settings?: (POGOProtos.Settings.Master.IIapSettings|null);
                    pokemon_upgrades?: (POGOProtos.Settings.Master.IPokemonUpgradeSettings|null);
                    equipped_badges?: (POGOProtos.Settings.Master.IEquippedBadgeSettings|null);
                    quest_settings?: (POGOProtos.Settings.Master.IQuestSettings|null);
                    avatar_customization?: (POGOProtos.Settings.Master.IAvatarCustomizationSettings|null);
                    form_settings?: (POGOProtos.Settings.Master.IFormSettings|null);
                    gender_settings?: (POGOProtos.Settings.Master.IGenderSettings|null);
                    gym_badge_settings?: (POGOProtos.Settings.Master.IGymBadgeGmtSettings|null);
                    weather_affinities?: (POGOProtos.Settings.Master.IWeatherAffinity|null);
                    weather_bonus_settings?: (POGOProtos.Settings.Master.IWeatherBonus|null);
                    pokemon_scale_settings?: (POGOProtos.Settings.Master.IPokemonScaleSetting|null);
                    iap_category_display?: (POGOProtos.Settings.Master.IIapItemCategoryDisplay|null);
                    onboarding_settings?: (POGOProtos.Settings.Master.IOnboardingSettings|null);
                }

                class ItemTemplate implements IItemTemplate {
                    constructor(properties?: POGOProtos.Networking.Responses.DownloadItemTemplatesResponse.IItemTemplate);
                    public template_id: string;
                    public pokemon_settings?: (POGOProtos.Settings.Master.IPokemonSettings|null);
                    public item_settings?: (POGOProtos.Settings.Master.IItemSettings|null);
                    public move_settings?: (POGOProtos.Settings.Master.IMoveSettings|null);
                    public move_sequence_settings?: (POGOProtos.Settings.Master.IMoveSequenceSettings|null);
                    public type_effective?: (POGOProtos.Settings.Master.ITypeEffectiveSettings|null);
                    public badge_settings?: (POGOProtos.Settings.Master.IBadgeSettings|null);
                    public camera?: (POGOProtos.Settings.Master.ICameraSettings|null);
                    public player_level?: (POGOProtos.Settings.Master.IPlayerLevelSettings|null);
                    public gym_level?: (POGOProtos.Settings.Master.IGymLevelSettings|null);
                    public battle_settings?: (POGOProtos.Settings.Master.IGymBattleSettings|null);
                    public encounter_settings?: (POGOProtos.Settings.Master.IEncounterSettings|null);
                    public iap_item_display?: (POGOProtos.Settings.Master.IIapItemDisplay|null);
                    public iap_settings?: (POGOProtos.Settings.Master.IIapSettings|null);
                    public pokemon_upgrades?: (POGOProtos.Settings.Master.IPokemonUpgradeSettings|null);
                    public equipped_badges?: (POGOProtos.Settings.Master.IEquippedBadgeSettings|null);
                    public quest_settings?: (POGOProtos.Settings.Master.IQuestSettings|null);
                    public avatar_customization?: (POGOProtos.Settings.Master.IAvatarCustomizationSettings|null);
                    public form_settings?: (POGOProtos.Settings.Master.IFormSettings|null);
                    public gender_settings?: (POGOProtos.Settings.Master.IGenderSettings|null);
                    public gym_badge_settings?: (POGOProtos.Settings.Master.IGymBadgeGmtSettings|null);
                    public weather_affinities?: (POGOProtos.Settings.Master.IWeatherAffinity|null);
                    public weather_bonus_settings?: (POGOProtos.Settings.Master.IWeatherBonus|null);
                    public pokemon_scale_settings?: (POGOProtos.Settings.Master.IPokemonScaleSetting|null);
                    public iap_category_display?: (POGOProtos.Settings.Master.IIapItemCategoryDisplay|null);
                    public onboarding_settings?: (POGOProtos.Settings.Master.IOnboardingSettings|null);
                    public static create(properties?: POGOProtos.Networking.Responses.DownloadItemTemplatesResponse.IItemTemplate): POGOProtos.Networking.Responses.DownloadItemTemplatesResponse.ItemTemplate;
                    public static encode(message: POGOProtos.Networking.Responses.DownloadItemTemplatesResponse.IItemTemplate, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Responses.DownloadItemTemplatesResponse.IItemTemplate, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.DownloadItemTemplatesResponse.ItemTemplate;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.DownloadItemTemplatesResponse.ItemTemplate;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.DownloadItemTemplatesResponse.ItemTemplate;
                    public static toObject(message: POGOProtos.Networking.Responses.DownloadItemTemplatesResponse.ItemTemplate, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                enum Result {
                    UNSET = 0,
                    SUCCESS = 1,
                    PAGE = 2,
                    RETRY = 3
                }
            }

            interface IDownloadRemoteConfigVersionResponse {
                result?: (POGOProtos.Networking.Responses.DownloadRemoteConfigVersionResponse.Result|null);
                item_templates_timestamp_ms?: (number|Long|null);
                asset_digest_timestamp_ms?: (number|Long|null);
                experiment_id?: (number[]|null);
            }

            class DownloadRemoteConfigVersionResponse implements IDownloadRemoteConfigVersionResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IDownloadRemoteConfigVersionResponse);
                public result: POGOProtos.Networking.Responses.DownloadRemoteConfigVersionResponse.Result;
                public item_templates_timestamp_ms: (number|Long);
                public asset_digest_timestamp_ms: (number|Long);
                public experiment_id: number[];
                public static create(properties?: POGOProtos.Networking.Responses.IDownloadRemoteConfigVersionResponse): POGOProtos.Networking.Responses.DownloadRemoteConfigVersionResponse;
                public static encode(message: POGOProtos.Networking.Responses.IDownloadRemoteConfigVersionResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IDownloadRemoteConfigVersionResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.DownloadRemoteConfigVersionResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.DownloadRemoteConfigVersionResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.DownloadRemoteConfigVersionResponse;
                public static toObject(message: POGOProtos.Networking.Responses.DownloadRemoteConfigVersionResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace DownloadRemoteConfigVersionResponse {

                enum Result {
                    UNSET = 0,
                    SUCCESS = 1
                }
            }

            interface IDownloadSettingsResponse {
                error?: (string|null);
                hash?: (string|null);
                settings?: (POGOProtos.Settings.IGlobalSettings|null);
            }

            class DownloadSettingsResponse implements IDownloadSettingsResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IDownloadSettingsResponse);
                public error: string;
                public hash: string;
                public settings?: (POGOProtos.Settings.IGlobalSettings|null);
                public static create(properties?: POGOProtos.Networking.Responses.IDownloadSettingsResponse): POGOProtos.Networking.Responses.DownloadSettingsResponse;
                public static encode(message: POGOProtos.Networking.Responses.IDownloadSettingsResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IDownloadSettingsResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.DownloadSettingsResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.DownloadSettingsResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.DownloadSettingsResponse;
                public static toObject(message: POGOProtos.Networking.Responses.DownloadSettingsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IEchoResponse {
                context?: (string|null);
            }

            class EchoResponse implements IEchoResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IEchoResponse);
                public context: string;
                public static create(properties?: POGOProtos.Networking.Responses.IEchoResponse): POGOProtos.Networking.Responses.EchoResponse;
                public static encode(message: POGOProtos.Networking.Responses.IEchoResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IEchoResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.EchoResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.EchoResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.EchoResponse;
                public static toObject(message: POGOProtos.Networking.Responses.EchoResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IEncounterResponse {
                wild_pokemon?: (POGOProtos.Map.Pokemon.IWildPokemon|null);
                background?: (POGOProtos.Networking.Responses.EncounterResponse.Background|null);
                status?: (POGOProtos.Networking.Responses.EncounterResponse.Status|null);
                capture_probability?: (POGOProtos.Data.Capture.ICaptureProbability|null);
                active_item?: (POGOProtos.Inventory.Item.ItemId|null);
                arplus_attempts_until_flee?: (number|null);
            }

            class EncounterResponse implements IEncounterResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IEncounterResponse);
                public wild_pokemon?: (POGOProtos.Map.Pokemon.IWildPokemon|null);
                public background: POGOProtos.Networking.Responses.EncounterResponse.Background;
                public status: POGOProtos.Networking.Responses.EncounterResponse.Status;
                public capture_probability?: (POGOProtos.Data.Capture.ICaptureProbability|null);
                public active_item: POGOProtos.Inventory.Item.ItemId;
                public arplus_attempts_until_flee: number;
                public static create(properties?: POGOProtos.Networking.Responses.IEncounterResponse): POGOProtos.Networking.Responses.EncounterResponse;
                public static encode(message: POGOProtos.Networking.Responses.IEncounterResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IEncounterResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.EncounterResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.EncounterResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.EncounterResponse;
                public static toObject(message: POGOProtos.Networking.Responses.EncounterResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace EncounterResponse {

                enum Background {
                    PARK = 0,
                    DESERT = 1
                }

                enum Status {
                    ENCOUNTER_ERROR = 0,
                    ENCOUNTER_SUCCESS = 1,
                    ENCOUNTER_NOT_FOUND = 2,
                    ENCOUNTER_CLOSED = 3,
                    ENCOUNTER_POKEMON_FLED = 4,
                    ENCOUNTER_NOT_IN_RANGE = 5,
                    ENCOUNTER_ALREADY_HAPPENED = 6,
                    POKEMON_INVENTORY_FULL = 7
                }
            }

            interface IEncounterTutorialCompleteResponse {
                result?: (POGOProtos.Networking.Responses.EncounterTutorialCompleteResponse.Result|null);
                pokemon_data?: (POGOProtos.Data.IPokemonData|null);
                capture_award?: (POGOProtos.Data.Capture.ICaptureAward|null);
            }

            class EncounterTutorialCompleteResponse implements IEncounterTutorialCompleteResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IEncounterTutorialCompleteResponse);
                public result: POGOProtos.Networking.Responses.EncounterTutorialCompleteResponse.Result;
                public pokemon_data?: (POGOProtos.Data.IPokemonData|null);
                public capture_award?: (POGOProtos.Data.Capture.ICaptureAward|null);
                public static create(properties?: POGOProtos.Networking.Responses.IEncounterTutorialCompleteResponse): POGOProtos.Networking.Responses.EncounterTutorialCompleteResponse;
                public static encode(message: POGOProtos.Networking.Responses.IEncounterTutorialCompleteResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IEncounterTutorialCompleteResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.EncounterTutorialCompleteResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.EncounterTutorialCompleteResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.EncounterTutorialCompleteResponse;
                public static toObject(message: POGOProtos.Networking.Responses.EncounterTutorialCompleteResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace EncounterTutorialCompleteResponse {

                enum Result {
                    UNSET = 0,
                    SUCCESS = 1,
                    ERROR_INVALID_POKEMON = 2
                }
            }

            interface IEquipBadgeResponse {
                result?: (POGOProtos.Networking.Responses.EquipBadgeResponse.Result|null);
                equipped?: (POGOProtos.Data.Player.IEquippedBadge|null);
            }

            class EquipBadgeResponse implements IEquipBadgeResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IEquipBadgeResponse);
                public result: POGOProtos.Networking.Responses.EquipBadgeResponse.Result;
                public equipped?: (POGOProtos.Data.Player.IEquippedBadge|null);
                public static create(properties?: POGOProtos.Networking.Responses.IEquipBadgeResponse): POGOProtos.Networking.Responses.EquipBadgeResponse;
                public static encode(message: POGOProtos.Networking.Responses.IEquipBadgeResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IEquipBadgeResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.EquipBadgeResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.EquipBadgeResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.EquipBadgeResponse;
                public static toObject(message: POGOProtos.Networking.Responses.EquipBadgeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace EquipBadgeResponse {

                enum Result {
                    UNSET = 0,
                    SUCCESS = 1,
                    COOLDOWN_ACTIVE = 2,
                    NOT_QUALIFIED = 3
                }
            }

            interface IEvolvePokemonResponse {
                result?: (POGOProtos.Networking.Responses.EvolvePokemonResponse.Result|null);
                evolved_pokemon_data?: (POGOProtos.Data.IPokemonData|null);
                experience_awarded?: (number|null);
                candy_awarded?: (number|null);
            }

            class EvolvePokemonResponse implements IEvolvePokemonResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IEvolvePokemonResponse);
                public result: POGOProtos.Networking.Responses.EvolvePokemonResponse.Result;
                public evolved_pokemon_data?: (POGOProtos.Data.IPokemonData|null);
                public experience_awarded: number;
                public candy_awarded: number;
                public static create(properties?: POGOProtos.Networking.Responses.IEvolvePokemonResponse): POGOProtos.Networking.Responses.EvolvePokemonResponse;
                public static encode(message: POGOProtos.Networking.Responses.IEvolvePokemonResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IEvolvePokemonResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.EvolvePokemonResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.EvolvePokemonResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.EvolvePokemonResponse;
                public static toObject(message: POGOProtos.Networking.Responses.EvolvePokemonResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace EvolvePokemonResponse {

                enum Result {
                    UNSET = 0,
                    SUCCESS = 1,
                    FAILED_POKEMON_MISSING = 2,
                    FAILED_INSUFFICIENT_RESOURCES = 3,
                    FAILED_POKEMON_CANNOT_EVOLVE = 4,
                    FAILED_POKEMON_IS_DEPLOYED = 5,
                    FAILED_INVALID_ITEM_REQUIREMENT = 6
                }
            }

            interface IFetchAllNewsResponse {
                result?: (POGOProtos.Networking.Responses.FetchAllNewsResponse.Result|null);
                current_news?: (POGOProtos.Data.News.ICurrentNews|null);
            }

            class FetchAllNewsResponse implements IFetchAllNewsResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IFetchAllNewsResponse);
                public result: POGOProtos.Networking.Responses.FetchAllNewsResponse.Result;
                public current_news?: (POGOProtos.Data.News.ICurrentNews|null);
                public static create(properties?: POGOProtos.Networking.Responses.IFetchAllNewsResponse): POGOProtos.Networking.Responses.FetchAllNewsResponse;
                public static encode(message: POGOProtos.Networking.Responses.IFetchAllNewsResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IFetchAllNewsResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.FetchAllNewsResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.FetchAllNewsResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.FetchAllNewsResponse;
                public static toObject(message: POGOProtos.Networking.Responses.FetchAllNewsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace FetchAllNewsResponse {

                enum Result {
                    UNSET = 0,
                    SUCCESS = 1,
                    NO_NEWS_FOUND = 2
                }
            }

            interface IFortDeployPokemonResponse {
                result?: (POGOProtos.Networking.Responses.FortDeployPokemonResponse.Result|null);
                fort_details?: (POGOProtos.Networking.Responses.IFortDetailsResponse|null);
                pokemon_data?: (POGOProtos.Data.IPokemonData|null);
                gym_state?: (POGOProtos.Data.Gym.IGymState|null);
            }

            class FortDeployPokemonResponse implements IFortDeployPokemonResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IFortDeployPokemonResponse);
                public result: POGOProtos.Networking.Responses.FortDeployPokemonResponse.Result;
                public fort_details?: (POGOProtos.Networking.Responses.IFortDetailsResponse|null);
                public pokemon_data?: (POGOProtos.Data.IPokemonData|null);
                public gym_state?: (POGOProtos.Data.Gym.IGymState|null);
                public static create(properties?: POGOProtos.Networking.Responses.IFortDeployPokemonResponse): POGOProtos.Networking.Responses.FortDeployPokemonResponse;
                public static encode(message: POGOProtos.Networking.Responses.IFortDeployPokemonResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IFortDeployPokemonResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.FortDeployPokemonResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.FortDeployPokemonResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.FortDeployPokemonResponse;
                public static toObject(message: POGOProtos.Networking.Responses.FortDeployPokemonResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace FortDeployPokemonResponse {

                enum Result {
                    NO_RESULT_SET = 0,
                    SUCCESS = 1,
                    ERROR_ALREADY_HAS_POKEMON_ON_FORT = 2,
                    ERROR_OPPOSING_TEAM_OWNS_FORT = 3,
                    ERROR_FORT_IS_FULL = 4,
                    ERROR_NOT_IN_RANGE = 5,
                    ERROR_PLAYER_HAS_NO_TEAM = 6,
                    ERROR_POKEMON_NOT_FULL_HP = 7,
                    ERROR_PLAYER_BELOW_MINIMUM_LEVEL = 8,
                    ERROR_POKEMON_IS_BUDDY = 9,
                    ERROR_FORT_DEPLOY_LOCKOUT = 10,
                    ERROR_PLAYER_HAS_NO_NICKNAME = 11,
                    ERROR_POI_INACCESSIBLE = 12,
                    ERROR_LEGENDARY_POKEMON = 13,
                    ERROR_INVALID_POKEMON = 14
                }
            }

            interface IFortDetailsResponse {
                fort_id?: (string|null);
                team_color?: (POGOProtos.Enums.TeamColor|null);
                pokemon_data?: (POGOProtos.Data.IPokemonData|null);
                name?: (string|null);
                image_urls?: (string[]|null);
                fp?: (number|null);
                stamina?: (number|null);
                max_stamina?: (number|null);
                type?: (POGOProtos.Map.Fort.FortType|null);
                latitude?: (number|null);
                longitude?: (number|null);
                description?: (string|null);
                modifiers?: (POGOProtos.Map.Fort.IFortModifier[]|null);
                close_soon?: (boolean|null);
                checkin_image_url?: (string|null);
                event_info?: (POGOProtos.Data.Raid.IEventInfo|null);
            }

            class FortDetailsResponse implements IFortDetailsResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IFortDetailsResponse);
                public fort_id: string;
                public team_color: POGOProtos.Enums.TeamColor;
                public pokemon_data?: (POGOProtos.Data.IPokemonData|null);
                public name: string;
                public image_urls: string[];
                public fp: number;
                public stamina: number;
                public max_stamina: number;
                public type: POGOProtos.Map.Fort.FortType;
                public latitude: number;
                public longitude: number;
                public description: string;
                public modifiers: POGOProtos.Map.Fort.IFortModifier[];
                public close_soon: boolean;
                public checkin_image_url: string;
                public event_info?: (POGOProtos.Data.Raid.IEventInfo|null);
                public static create(properties?: POGOProtos.Networking.Responses.IFortDetailsResponse): POGOProtos.Networking.Responses.FortDetailsResponse;
                public static encode(message: POGOProtos.Networking.Responses.IFortDetailsResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IFortDetailsResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.FortDetailsResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.FortDetailsResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.FortDetailsResponse;
                public static toObject(message: POGOProtos.Networking.Responses.FortDetailsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IFortRecallPokemonResponse {
                result?: (POGOProtos.Networking.Responses.FortRecallPokemonResponse.Result|null);
                fort_details?: (POGOProtos.Networking.Responses.IFortDetailsResponse|null);
            }

            class FortRecallPokemonResponse implements IFortRecallPokemonResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IFortRecallPokemonResponse);
                public result: POGOProtos.Networking.Responses.FortRecallPokemonResponse.Result;
                public fort_details?: (POGOProtos.Networking.Responses.IFortDetailsResponse|null);
                public static create(properties?: POGOProtos.Networking.Responses.IFortRecallPokemonResponse): POGOProtos.Networking.Responses.FortRecallPokemonResponse;
                public static encode(message: POGOProtos.Networking.Responses.IFortRecallPokemonResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IFortRecallPokemonResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.FortRecallPokemonResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.FortRecallPokemonResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.FortRecallPokemonResponse;
                public static toObject(message: POGOProtos.Networking.Responses.FortRecallPokemonResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace FortRecallPokemonResponse {

                enum Result {
                    NO_RESULT_SET = 0,
                    SUCCESS = 1,
                    ERROR_NOT_IN_RANGE = 2,
                    ERROR_POKEMON_NOT_ON_FORT = 3,
                    ERROR_NO_PLAYER = 4
                }
            }

            interface IFortSearchResponse {
                result?: (POGOProtos.Networking.Responses.FortSearchResponse.Result|null);
                items_awarded?: (POGOProtos.Inventory.Item.IItemAward[]|null);
                gems_awarded?: (number|null);
                pokemon_data_egg?: (POGOProtos.Data.IPokemonData|null);
                experience_awarded?: (number|null);
                cooldown_complete_timestamp_ms?: (number|Long|null);
                chain_hack_sequence_number?: (number|null);
                awarded_gym_badge?: (POGOProtos.Data.Badge.IAwardedGymBadge|null);
                loot?: (POGOProtos.Inventory.ILoot|null);
                bonus_loot?: (POGOProtos.Inventory.ILoot|null);
                raid_tickets?: (number|null);
                team_bonus_loot?: (POGOProtos.Inventory.ILoot|null);
                fort_id?: (string|null);
                challenge_quest?: (POGOProtos.Data.Quests.IClientQuest|null);
            }

            class FortSearchResponse implements IFortSearchResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IFortSearchResponse);
                public result: POGOProtos.Networking.Responses.FortSearchResponse.Result;
                public items_awarded: POGOProtos.Inventory.Item.IItemAward[];
                public gems_awarded: number;
                public pokemon_data_egg?: (POGOProtos.Data.IPokemonData|null);
                public experience_awarded: number;
                public cooldown_complete_timestamp_ms: (number|Long);
                public chain_hack_sequence_number: number;
                public awarded_gym_badge?: (POGOProtos.Data.Badge.IAwardedGymBadge|null);
                public loot?: (POGOProtos.Inventory.ILoot|null);
                public bonus_loot?: (POGOProtos.Inventory.ILoot|null);
                public raid_tickets: number;
                public team_bonus_loot?: (POGOProtos.Inventory.ILoot|null);
                public fort_id: string;
                public challenge_quest?: (POGOProtos.Data.Quests.IClientQuest|null);
                public static create(properties?: POGOProtos.Networking.Responses.IFortSearchResponse): POGOProtos.Networking.Responses.FortSearchResponse;
                public static encode(message: POGOProtos.Networking.Responses.IFortSearchResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IFortSearchResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.FortSearchResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.FortSearchResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.FortSearchResponse;
                public static toObject(message: POGOProtos.Networking.Responses.FortSearchResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace FortSearchResponse {

                enum Result {
                    NO_RESULT_SET = 0,
                    SUCCESS = 1,
                    OUT_OF_RANGE = 2,
                    IN_COOLDOWN_PERIOD = 3,
                    INVENTORY_FULL = 4,
                    EXCEEDED_DAILY_LIMIT = 5,
                    POI_INACCESSIBLE = 6
                }
            }

            interface IGetAssetDigestResponse {
                digest?: (POGOProtos.Data.IAssetDigestEntry[]|null);
                timestamp_ms?: (number|Long|null);
                result?: (POGOProtos.Networking.Responses.GetAssetDigestResponse.Result|null);
                page_offset?: (number|null);
            }

            class GetAssetDigestResponse implements IGetAssetDigestResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IGetAssetDigestResponse);
                public digest: POGOProtos.Data.IAssetDigestEntry[];
                public timestamp_ms: (number|Long);
                public result: POGOProtos.Networking.Responses.GetAssetDigestResponse.Result;
                public page_offset: number;
                public static create(properties?: POGOProtos.Networking.Responses.IGetAssetDigestResponse): POGOProtos.Networking.Responses.GetAssetDigestResponse;
                public static encode(message: POGOProtos.Networking.Responses.IGetAssetDigestResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IGetAssetDigestResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.GetAssetDigestResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.GetAssetDigestResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.GetAssetDigestResponse;
                public static toObject(message: POGOProtos.Networking.Responses.GetAssetDigestResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace GetAssetDigestResponse {

                enum Result {
                    UNSET = 0,
                    SUCCESS = 1,
                    PAGE = 2,
                    RETRY = 3
                }
            }

            interface IGetBuddyWalkedResponse {
                success?: (boolean|null);
                family_candy_id?: (POGOProtos.Enums.PokemonFamilyId|null);
                candy_earned_count?: (number|null);
            }

            class GetBuddyWalkedResponse implements IGetBuddyWalkedResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IGetBuddyWalkedResponse);
                public success: boolean;
                public family_candy_id: POGOProtos.Enums.PokemonFamilyId;
                public candy_earned_count: number;
                public static create(properties?: POGOProtos.Networking.Responses.IGetBuddyWalkedResponse): POGOProtos.Networking.Responses.GetBuddyWalkedResponse;
                public static encode(message: POGOProtos.Networking.Responses.IGetBuddyWalkedResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IGetBuddyWalkedResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.GetBuddyWalkedResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.GetBuddyWalkedResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.GetBuddyWalkedResponse;
                public static toObject(message: POGOProtos.Networking.Responses.GetBuddyWalkedResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IGetDownloadUrlsResponse {
                download_urls?: (POGOProtos.Data.IDownloadUrlEntry[]|null);
            }

            class GetDownloadUrlsResponse implements IGetDownloadUrlsResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IGetDownloadUrlsResponse);
                public download_urls: POGOProtos.Data.IDownloadUrlEntry[];
                public static create(properties?: POGOProtos.Networking.Responses.IGetDownloadUrlsResponse): POGOProtos.Networking.Responses.GetDownloadUrlsResponse;
                public static encode(message: POGOProtos.Networking.Responses.IGetDownloadUrlsResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IGetDownloadUrlsResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.GetDownloadUrlsResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.GetDownloadUrlsResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.GetDownloadUrlsResponse;
                public static toObject(message: POGOProtos.Networking.Responses.GetDownloadUrlsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IGetGymBadgeDetailsResponse {
                gym_badge?: (POGOProtos.Data.Badge.IAwardedGymBadge|null);
                gym_defender?: (POGOProtos.Data.Gym.IGymDefender|null);
                success?: (boolean|null);
            }

            class GetGymBadgeDetailsResponse implements IGetGymBadgeDetailsResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IGetGymBadgeDetailsResponse);
                public gym_badge?: (POGOProtos.Data.Badge.IAwardedGymBadge|null);
                public gym_defender?: (POGOProtos.Data.Gym.IGymDefender|null);
                public success: boolean;
                public static create(properties?: POGOProtos.Networking.Responses.IGetGymBadgeDetailsResponse): POGOProtos.Networking.Responses.GetGymBadgeDetailsResponse;
                public static encode(message: POGOProtos.Networking.Responses.IGetGymBadgeDetailsResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IGetGymBadgeDetailsResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.GetGymBadgeDetailsResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.GetGymBadgeDetailsResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.GetGymBadgeDetailsResponse;
                public static toObject(message: POGOProtos.Networking.Responses.GetGymBadgeDetailsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IGetGymDetailsResponse {
                gym_state?: (POGOProtos.Data.Gym.IGymState|null);
                name?: (string|null);
                urls?: (string[]|null);
                result?: (POGOProtos.Networking.Responses.GetGymDetailsResponse.Result|null);
                description?: (string|null);
                secondary_url?: (string[]|null);
                checkin_image_url?: (string|null);
                event_info?: (POGOProtos.Data.Raid.IEventInfo|null);
            }

            class GetGymDetailsResponse implements IGetGymDetailsResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IGetGymDetailsResponse);
                public gym_state?: (POGOProtos.Data.Gym.IGymState|null);
                public name: string;
                public urls: string[];
                public result: POGOProtos.Networking.Responses.GetGymDetailsResponse.Result;
                public description: string;
                public secondary_url: string[];
                public checkin_image_url: string;
                public event_info?: (POGOProtos.Data.Raid.IEventInfo|null);
                public static create(properties?: POGOProtos.Networking.Responses.IGetGymDetailsResponse): POGOProtos.Networking.Responses.GetGymDetailsResponse;
                public static encode(message: POGOProtos.Networking.Responses.IGetGymDetailsResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IGetGymDetailsResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.GetGymDetailsResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.GetGymDetailsResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.GetGymDetailsResponse;
                public static toObject(message: POGOProtos.Networking.Responses.GetGymDetailsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace GetGymDetailsResponse {

                enum Result {
                    UNSET = 0,
                    SUCCESS = 1,
                    ERROR_NOT_IN_RANGE = 2
                }
            }

            interface IGetHatchedEggsResponse {
                success?: (boolean|null);
                pokemon_id?: ((number|Long)[]|null);
                experience_awarded?: (number[]|null);
                candy_awarded?: (number[]|null);
                stardust_awarded?: (number[]|null);
                egg_km_walked?: (number[]|null);
                hatched_pokemon?: (POGOProtos.Data.IPokemonData[]|null);
            }

            class GetHatchedEggsResponse implements IGetHatchedEggsResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IGetHatchedEggsResponse);
                public success: boolean;
                public pokemon_id: (number|Long)[];
                public experience_awarded: number[];
                public candy_awarded: number[];
                public stardust_awarded: number[];
                public egg_km_walked: number[];
                public hatched_pokemon: POGOProtos.Data.IPokemonData[];
                public static create(properties?: POGOProtos.Networking.Responses.IGetHatchedEggsResponse): POGOProtos.Networking.Responses.GetHatchedEggsResponse;
                public static encode(message: POGOProtos.Networking.Responses.IGetHatchedEggsResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IGetHatchedEggsResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.GetHatchedEggsResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.GetHatchedEggsResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.GetHatchedEggsResponse;
                public static toObject(message: POGOProtos.Networking.Responses.GetHatchedEggsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IGetHoloInventoryResponse {
                success?: (boolean|null);
                inventory_delta?: (POGOProtos.Inventory.IInventoryDelta|null);
            }

            class GetHoloInventoryResponse implements IGetHoloInventoryResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IGetHoloInventoryResponse);
                public success: boolean;
                public inventory_delta?: (POGOProtos.Inventory.IInventoryDelta|null);
                public static create(properties?: POGOProtos.Networking.Responses.IGetHoloInventoryResponse): POGOProtos.Networking.Responses.GetHoloInventoryResponse;
                public static encode(message: POGOProtos.Networking.Responses.IGetHoloInventoryResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IGetHoloInventoryResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.GetHoloInventoryResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.GetHoloInventoryResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.GetHoloInventoryResponse;
                public static toObject(message: POGOProtos.Networking.Responses.GetHoloInventoryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IGetInboxResponse {
                result?: (POGOProtos.Networking.Responses.GetInboxResponse.Result|null);
                inbox?: (POGOProtos.Networking.Responses.GetInboxResponse.IClientInbox|null);
            }

            class GetInboxResponse implements IGetInboxResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IGetInboxResponse);
                public result: POGOProtos.Networking.Responses.GetInboxResponse.Result;
                public inbox?: (POGOProtos.Networking.Responses.GetInboxResponse.IClientInbox|null);
                public static create(properties?: POGOProtos.Networking.Responses.IGetInboxResponse): POGOProtos.Networking.Responses.GetInboxResponse;
                public static encode(message: POGOProtos.Networking.Responses.IGetInboxResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IGetInboxResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.GetInboxResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.GetInboxResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.GetInboxResponse;
                public static toObject(message: POGOProtos.Networking.Responses.GetInboxResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace GetInboxResponse {

                interface IClientInbox {
                    notifications?: (POGOProtos.Networking.Responses.GetInboxResponse.ClientInbox.INotification[]|null);
                    builtin_variables?: (POGOProtos.Networking.Responses.GetInboxResponse.ClientInbox.ITemplateVariable[]|null);
                }

                class ClientInbox implements IClientInbox {
                    constructor(properties?: POGOProtos.Networking.Responses.GetInboxResponse.IClientInbox);
                    public notifications: POGOProtos.Networking.Responses.GetInboxResponse.ClientInbox.INotification[];
                    public builtin_variables: POGOProtos.Networking.Responses.GetInboxResponse.ClientInbox.ITemplateVariable[];
                    public static create(properties?: POGOProtos.Networking.Responses.GetInboxResponse.IClientInbox): POGOProtos.Networking.Responses.GetInboxResponse.ClientInbox;
                    public static encode(message: POGOProtos.Networking.Responses.GetInboxResponse.IClientInbox, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Responses.GetInboxResponse.IClientInbox, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.GetInboxResponse.ClientInbox;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.GetInboxResponse.ClientInbox;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.GetInboxResponse.ClientInbox;
                    public static toObject(message: POGOProtos.Networking.Responses.GetInboxResponse.ClientInbox, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                namespace ClientInbox {

                    interface INotification {
                        notification_id?: (string|null);
                        title_key?: (string|null);
                        category?: (string|null);
                        create_timestamp_ms?: (number|Long|null);
                        variables?: (POGOProtos.Networking.Responses.GetInboxResponse.ClientInbox.ITemplateVariable[]|null);
                        labels?: (POGOProtos.Networking.Responses.GetInboxResponse.ClientInbox.Notification.Label[]|null);
                        expire_time_ms?: (number|Long|null);
                    }

                    class Notification implements INotification {
                        constructor(properties?: POGOProtos.Networking.Responses.GetInboxResponse.ClientInbox.INotification);
                        public notification_id: string;
                        public title_key: string;
                        public category: string;
                        public create_timestamp_ms: (number|Long);
                        public variables: POGOProtos.Networking.Responses.GetInboxResponse.ClientInbox.ITemplateVariable[];
                        public labels: POGOProtos.Networking.Responses.GetInboxResponse.ClientInbox.Notification.Label[];
                        public expire_time_ms: (number|Long);
                        public static create(properties?: POGOProtos.Networking.Responses.GetInboxResponse.ClientInbox.INotification): POGOProtos.Networking.Responses.GetInboxResponse.ClientInbox.Notification;
                        public static encode(message: POGOProtos.Networking.Responses.GetInboxResponse.ClientInbox.INotification, writer?: $protobuf.Writer): $protobuf.Writer;
                        public static encodeDelimited(message: POGOProtos.Networking.Responses.GetInboxResponse.ClientInbox.INotification, writer?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.GetInboxResponse.ClientInbox.Notification;
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.GetInboxResponse.ClientInbox.Notification;
                        public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.GetInboxResponse.ClientInbox.Notification;
                        public static toObject(message: POGOProtos.Networking.Responses.GetInboxResponse.ClientInbox.Notification, options?: $protobuf.IConversionOptions): { [k: string]: any };
                        public toJSON(): { [k: string]: any };
                    }

                    namespace Notification {

                        enum Label {
                            UNSET_LABEL = 0,
                            UNREAD = 1,
                            NEW = 2,
                            IMMEDIATE = 3
                        }
                    }

                    interface ITemplateVariable {
                        name?: (string|null);
                        literal?: (string|null);
                        key?: (string|null);
                        lookup_table?: (string|null);
                        byte_value?: (Uint8Array|null);
                    }

                    class TemplateVariable implements ITemplateVariable {
                        constructor(properties?: POGOProtos.Networking.Responses.GetInboxResponse.ClientInbox.ITemplateVariable);
                        public name: string;
                        public literal: string;
                        public key: string;
                        public lookup_table: string;
                        public byte_value: Uint8Array;
                        public static create(properties?: POGOProtos.Networking.Responses.GetInboxResponse.ClientInbox.ITemplateVariable): POGOProtos.Networking.Responses.GetInboxResponse.ClientInbox.TemplateVariable;
                        public static encode(message: POGOProtos.Networking.Responses.GetInboxResponse.ClientInbox.ITemplateVariable, writer?: $protobuf.Writer): $protobuf.Writer;
                        public static encodeDelimited(message: POGOProtos.Networking.Responses.GetInboxResponse.ClientInbox.ITemplateVariable, writer?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.GetInboxResponse.ClientInbox.TemplateVariable;
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.GetInboxResponse.ClientInbox.TemplateVariable;
                        public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.GetInboxResponse.ClientInbox.TemplateVariable;
                        public static toObject(message: POGOProtos.Networking.Responses.GetInboxResponse.ClientInbox.TemplateVariable, options?: $protobuf.IConversionOptions): { [k: string]: any };
                        public toJSON(): { [k: string]: any };
                    }
                }

                enum Result {
                    UNSET = 0,
                    SUCCESS = 1,
                    FAILURE = 2
                }
            }

            interface IGetIncensePokemonResponse {
                result?: (POGOProtos.Networking.Responses.GetIncensePokemonResponse.Result|null);
                pokemon_id?: (POGOProtos.Enums.PokemonId|null);
                latitude?: (number|null);
                longitude?: (number|null);
                encounter_location?: (string|null);
                encounter_id?: (number|Long|null);
                disappear_timestamp_ms?: (number|Long|null);
                pokemon_display?: (POGOProtos.Data.IPokemonDisplay|null);
            }

            class GetIncensePokemonResponse implements IGetIncensePokemonResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IGetIncensePokemonResponse);
                public result: POGOProtos.Networking.Responses.GetIncensePokemonResponse.Result;
                public pokemon_id: POGOProtos.Enums.PokemonId;
                public latitude: number;
                public longitude: number;
                public encounter_location: string;
                public encounter_id: (number|Long);
                public disappear_timestamp_ms: (number|Long);
                public pokemon_display?: (POGOProtos.Data.IPokemonDisplay|null);
                public static create(properties?: POGOProtos.Networking.Responses.IGetIncensePokemonResponse): POGOProtos.Networking.Responses.GetIncensePokemonResponse;
                public static encode(message: POGOProtos.Networking.Responses.IGetIncensePokemonResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IGetIncensePokemonResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.GetIncensePokemonResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.GetIncensePokemonResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.GetIncensePokemonResponse;
                public static toObject(message: POGOProtos.Networking.Responses.GetIncensePokemonResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace GetIncensePokemonResponse {

                enum Result {
                    INCENSE_ENCOUNTER_UNKNOWN = 0,
                    INCENSE_ENCOUNTER_AVAILABLE = 1,
                    INCENSE_ENCOUNTER_NOT_AVAILABLE = 2
                }
            }

            interface IGetInventoryResponse {
                success?: (boolean|null);
                inventory_delta?: (POGOProtos.Inventory.IInventoryDelta|null);
            }

            class GetInventoryResponse implements IGetInventoryResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IGetInventoryResponse);
                public success: boolean;
                public inventory_delta?: (POGOProtos.Inventory.IInventoryDelta|null);
                public static create(properties?: POGOProtos.Networking.Responses.IGetInventoryResponse): POGOProtos.Networking.Responses.GetInventoryResponse;
                public static encode(message: POGOProtos.Networking.Responses.IGetInventoryResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IGetInventoryResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.GetInventoryResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.GetInventoryResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.GetInventoryResponse;
                public static toObject(message: POGOProtos.Networking.Responses.GetInventoryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IGetMapObjectsResponse {
                map_cells?: (POGOProtos.Map.IMapCell[]|null);
                status?: (POGOProtos.Map.MapObjectsStatus|null);
                time_of_day?: (POGOProtos.Networking.Responses.GetMapObjectsResponse.TimeOfDay|null);
                client_weather?: (POGOProtos.Map.Weather.IClientWeather[]|null);
            }

            class GetMapObjectsResponse implements IGetMapObjectsResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IGetMapObjectsResponse);
                public map_cells: POGOProtos.Map.IMapCell[];
                public status: POGOProtos.Map.MapObjectsStatus;
                public time_of_day: POGOProtos.Networking.Responses.GetMapObjectsResponse.TimeOfDay;
                public client_weather: POGOProtos.Map.Weather.IClientWeather[];
                public static create(properties?: POGOProtos.Networking.Responses.IGetMapObjectsResponse): POGOProtos.Networking.Responses.GetMapObjectsResponse;
                public static encode(message: POGOProtos.Networking.Responses.IGetMapObjectsResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IGetMapObjectsResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.GetMapObjectsResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.GetMapObjectsResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.GetMapObjectsResponse;
                public static toObject(message: POGOProtos.Networking.Responses.GetMapObjectsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace GetMapObjectsResponse {

                enum TimeOfDay {
                    NONE = 0,
                    DAY = 1,
                    NIGHT = 2
                }
            }

            interface IGetNewQuestsResponse {
                status?: (POGOProtos.Networking.Responses.GetNewQuestsResponse.Status|null);
                quests?: (POGOProtos.Data.Quests.IClientQuest[]|null);
            }

            class GetNewQuestsResponse implements IGetNewQuestsResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IGetNewQuestsResponse);
                public status: POGOProtos.Networking.Responses.GetNewQuestsResponse.Status;
                public quests: POGOProtos.Data.Quests.IClientQuest[];
                public static create(properties?: POGOProtos.Networking.Responses.IGetNewQuestsResponse): POGOProtos.Networking.Responses.GetNewQuestsResponse;
                public static encode(message: POGOProtos.Networking.Responses.IGetNewQuestsResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IGetNewQuestsResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.GetNewQuestsResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.GetNewQuestsResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.GetNewQuestsResponse;
                public static toObject(message: POGOProtos.Networking.Responses.GetNewQuestsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace GetNewQuestsResponse {

                enum Status {
                    UNSET = 0,
                    SUCCESS = 1,
                    ERROR_INVALID_DISPLAY = 2
                }
            }

            interface IGetPlayerProfileResponse {
                result?: (POGOProtos.Networking.Responses.GetPlayerProfileResponse.Result|null);
                start_time?: (number|Long|null);
                badges?: (POGOProtos.Data.IPlayerBadge[]|null);
                gym_badges?: (POGOProtos.Networking.Responses.GetPlayerProfileResponse.IGymBadges|null);
            }

            class GetPlayerProfileResponse implements IGetPlayerProfileResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IGetPlayerProfileResponse);
                public result: POGOProtos.Networking.Responses.GetPlayerProfileResponse.Result;
                public start_time: (number|Long);
                public badges: POGOProtos.Data.IPlayerBadge[];
                public gym_badges?: (POGOProtos.Networking.Responses.GetPlayerProfileResponse.IGymBadges|null);
                public static create(properties?: POGOProtos.Networking.Responses.IGetPlayerProfileResponse): POGOProtos.Networking.Responses.GetPlayerProfileResponse;
                public static encode(message: POGOProtos.Networking.Responses.IGetPlayerProfileResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IGetPlayerProfileResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.GetPlayerProfileResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.GetPlayerProfileResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.GetPlayerProfileResponse;
                public static toObject(message: POGOProtos.Networking.Responses.GetPlayerProfileResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace GetPlayerProfileResponse {

                interface IGymBadges {
                    gym_badge?: (POGOProtos.Data.Badge.IAwardedGymBadge[]|null);
                    total?: (number|null);
                }

                class GymBadges implements IGymBadges {
                    constructor(properties?: POGOProtos.Networking.Responses.GetPlayerProfileResponse.IGymBadges);
                    public gym_badge: POGOProtos.Data.Badge.IAwardedGymBadge[];
                    public total: number;
                    public static create(properties?: POGOProtos.Networking.Responses.GetPlayerProfileResponse.IGymBadges): POGOProtos.Networking.Responses.GetPlayerProfileResponse.GymBadges;
                    public static encode(message: POGOProtos.Networking.Responses.GetPlayerProfileResponse.IGymBadges, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Responses.GetPlayerProfileResponse.IGymBadges, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.GetPlayerProfileResponse.GymBadges;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.GetPlayerProfileResponse.GymBadges;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.GetPlayerProfileResponse.GymBadges;
                    public static toObject(message: POGOProtos.Networking.Responses.GetPlayerProfileResponse.GymBadges, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                enum Result {
                    UNSET = 0,
                    SUCCESS = 1
                }
            }

            interface IGetPlayerResponse {
                success?: (boolean|null);
                player_data?: (POGOProtos.Data.IPlayerData|null);
                banned?: (boolean|null);
                warn?: (boolean|null);
                was_created?: (boolean|null);
            }

            class GetPlayerResponse implements IGetPlayerResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IGetPlayerResponse);
                public success: boolean;
                public player_data?: (POGOProtos.Data.IPlayerData|null);
                public banned: boolean;
                public warn: boolean;
                public was_created: boolean;
                public static create(properties?: POGOProtos.Networking.Responses.IGetPlayerResponse): POGOProtos.Networking.Responses.GetPlayerResponse;
                public static encode(message: POGOProtos.Networking.Responses.IGetPlayerResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IGetPlayerResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.GetPlayerResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.GetPlayerResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.GetPlayerResponse;
                public static toObject(message: POGOProtos.Networking.Responses.GetPlayerResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IGetQuestDetailsResponse {
                status?: (POGOProtos.Networking.Responses.GetQuestDetailsResponse.Status|null);
                quests?: (POGOProtos.Data.Quests.IClientQuest[]|null);
            }

            class GetQuestDetailsResponse implements IGetQuestDetailsResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IGetQuestDetailsResponse);
                public status: POGOProtos.Networking.Responses.GetQuestDetailsResponse.Status;
                public quests: POGOProtos.Data.Quests.IClientQuest[];
                public static create(properties?: POGOProtos.Networking.Responses.IGetQuestDetailsResponse): POGOProtos.Networking.Responses.GetQuestDetailsResponse;
                public static encode(message: POGOProtos.Networking.Responses.IGetQuestDetailsResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IGetQuestDetailsResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.GetQuestDetailsResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.GetQuestDetailsResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.GetQuestDetailsResponse;
                public static toObject(message: POGOProtos.Networking.Responses.GetQuestDetailsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace GetQuestDetailsResponse {

                enum Status {
                    UNSET = 0,
                    SUCCESS = 1,
                    ERROR_QUEST_NOT_FOUND = 2,
                    ERROR_INVALID_DISPLAY = 3
                }
            }

            interface IGetRaidDetailsResponse {
                lobby?: (POGOProtos.Data.Raid.ILobby|null);
                raid_battle?: (POGOProtos.Data.Battle.IBattle|null);
                player_can_join_lobby?: (boolean|null);
                result?: (POGOProtos.Networking.Responses.GetRaidDetailsResponse.Result|null);
                raid_info?: (POGOProtos.Data.Raid.IRaidInfo|null);
                ticket_used?: (boolean|null);
                free_ticket_available?: (boolean|null);
                throws_remaining?: (number|null);
                received_rewards?: (boolean|null);
                num_players_in_lobby?: (number|null);
                server_ms?: (number|Long|null);
            }

            class GetRaidDetailsResponse implements IGetRaidDetailsResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IGetRaidDetailsResponse);
                public lobby?: (POGOProtos.Data.Raid.ILobby|null);
                public raid_battle?: (POGOProtos.Data.Battle.IBattle|null);
                public player_can_join_lobby: boolean;
                public result: POGOProtos.Networking.Responses.GetRaidDetailsResponse.Result;
                public raid_info?: (POGOProtos.Data.Raid.IRaidInfo|null);
                public ticket_used: boolean;
                public free_ticket_available: boolean;
                public throws_remaining: number;
                public received_rewards: boolean;
                public num_players_in_lobby: number;
                public server_ms: (number|Long);
                public static create(properties?: POGOProtos.Networking.Responses.IGetRaidDetailsResponse): POGOProtos.Networking.Responses.GetRaidDetailsResponse;
                public static encode(message: POGOProtos.Networking.Responses.IGetRaidDetailsResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IGetRaidDetailsResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.GetRaidDetailsResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.GetRaidDetailsResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.GetRaidDetailsResponse;
                public static toObject(message: POGOProtos.Networking.Responses.GetRaidDetailsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace GetRaidDetailsResponse {

                enum Result {
                    UNSET = 0,
                    SUCCESS = 1,
                    ERROR_NOT_IN_RANGE = 2,
                    ERROR_RAID_COMPLETED = 3,
                    ERROR_RAID_UNAVAILABLE = 4,
                    ERROR_PLAYER_BELOW_MINIMUM_LEVEL = 5,
                    ERROR_POI_INACCESSIBLE = 6
                }
            }

            interface IGymDeployResponse {
                result?: (POGOProtos.Networking.Responses.GymDeployResponse.Result|null);
                gym_status_and_defenders?: (POGOProtos.Data.Gym.IGymStatusAndDefenders|null);
                awarded_gym_badge?: (POGOProtos.Data.Badge.IAwardedGymBadge|null);
                cooldown_complete_timestamp_ms?: (number|Long|null);
            }

            class GymDeployResponse implements IGymDeployResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IGymDeployResponse);
                public result: POGOProtos.Networking.Responses.GymDeployResponse.Result;
                public gym_status_and_defenders?: (POGOProtos.Data.Gym.IGymStatusAndDefenders|null);
                public awarded_gym_badge?: (POGOProtos.Data.Badge.IAwardedGymBadge|null);
                public cooldown_complete_timestamp_ms: (number|Long);
                public static create(properties?: POGOProtos.Networking.Responses.IGymDeployResponse): POGOProtos.Networking.Responses.GymDeployResponse;
                public static encode(message: POGOProtos.Networking.Responses.IGymDeployResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IGymDeployResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.GymDeployResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.GymDeployResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.GymDeployResponse;
                public static toObject(message: POGOProtos.Networking.Responses.GymDeployResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace GymDeployResponse {

                enum Result {
                    NO_RESULT_SET = 0,
                    SUCCESS = 1,
                    ERROR_ALREADY_HAS_POKEMON_ON_FORT = 2,
                    ERROR_OPPOSING_TEAM_OWNS_FORT = 3,
                    ERROR_FORT_IS_FULL = 4,
                    ERROR_NOT_IN_RANGE = 5,
                    ERROR_PLAYER_HAS_NO_TEAM = 6,
                    ERROR_POKEMON_NOT_FULL_HP = 7,
                    ERROR_PLAYER_BELOW_MINIMUM_LEVEL = 8,
                    ERROR_POKEMON_IS_BUDDY = 9,
                    ERROR_FORT_DEPLOY_LOCKOUT = 10,
                    ERROR_PLAYER_HAS_NO_NICKNAME = 11,
                    ERROR_POI_INACCESSIBLE = 12,
                    ERROR_NOT_A_POKEMON = 13,
                    ERROR_TOO_MANY_OF_SAME_KIND = 14,
                    ERROR_TOO_MANY_DEPLOYED = 15,
                    ERROR_TEAM_DEPLOY_LOCKOUT = 16,
                    ERROR_LEGENDARY_POKEMON = 17,
                    ERROR_INVALID_POKEMON = 18,
                    ERROR_RAID_ACTIVE = 19
                }
            }

            interface IGymFeedPokemonResponse {
                result?: (POGOProtos.Networking.Responses.GymFeedPokemonResponse.Result|null);
                gym_status_and_defenders?: (POGOProtos.Data.Gym.IGymStatusAndDefenders|null);
                awarded_gym_badge?: (POGOProtos.Data.Badge.IAwardedGymBadge|null);
                stardust_awarded?: (number|null);
                xp_awarded?: (number|null);
                num_candy_awarded?: (number|null);
                family_candy_id?: (POGOProtos.Enums.PokemonFamilyId|null);
                cooldown_complete?: (number|Long|null);
            }

            class GymFeedPokemonResponse implements IGymFeedPokemonResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IGymFeedPokemonResponse);
                public result: POGOProtos.Networking.Responses.GymFeedPokemonResponse.Result;
                public gym_status_and_defenders?: (POGOProtos.Data.Gym.IGymStatusAndDefenders|null);
                public awarded_gym_badge?: (POGOProtos.Data.Badge.IAwardedGymBadge|null);
                public stardust_awarded: number;
                public xp_awarded: number;
                public num_candy_awarded: number;
                public family_candy_id: POGOProtos.Enums.PokemonFamilyId;
                public cooldown_complete: (number|Long);
                public static create(properties?: POGOProtos.Networking.Responses.IGymFeedPokemonResponse): POGOProtos.Networking.Responses.GymFeedPokemonResponse;
                public static encode(message: POGOProtos.Networking.Responses.IGymFeedPokemonResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IGymFeedPokemonResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.GymFeedPokemonResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.GymFeedPokemonResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.GymFeedPokemonResponse;
                public static toObject(message: POGOProtos.Networking.Responses.GymFeedPokemonResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace GymFeedPokemonResponse {

                enum Result {
                    UNSET = 0,
                    SUCCESS = 1,
                    ERROR_CANNOT_USE = 2,
                    ERROR_NOT_IN_RANGE = 3,
                    ERROR_POKEMON_NOT_THERE = 4,
                    ERROR_POKEMON_FULL = 5,
                    ERROR_NO_BERRIES_LEFT = 6,
                    ERROR_WRONG_TEAM = 7,
                    ERROR_WRONG_COUNT = 8,
                    ERROR_TOO_FAST = 9,
                    ERROR_TOO_FREQUENT = 10,
                    ERROR_GYM_BUSY = 11,
                    ERROR_RAID_ACTIVE = 12,
                    ERROR_GYM_CLOSED = 13
                }
            }

            interface IGymGetInfoResponse {
                gym_status_and_defenders?: (POGOProtos.Data.Gym.IGymStatusAndDefenders|null);
                name?: (string|null);
                url?: (string|null);
                result?: (POGOProtos.Networking.Responses.GymGetInfoResponse.Result|null);
                description?: (string|null);
                secondary_url?: (string|null);
                awarded_gym_badge?: (POGOProtos.Data.Badge.IAwardedGymBadge|null);
                checkin_image_url?: (string|null);
                event_info?: (POGOProtos.Data.Raid.IEventInfo|null);
                display_weather?: (POGOProtos.Map.Weather.IDisplayWeather|null);
            }

            class GymGetInfoResponse implements IGymGetInfoResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IGymGetInfoResponse);
                public gym_status_and_defenders?: (POGOProtos.Data.Gym.IGymStatusAndDefenders|null);
                public name: string;
                public url: string;
                public result: POGOProtos.Networking.Responses.GymGetInfoResponse.Result;
                public description: string;
                public secondary_url: string;
                public awarded_gym_badge?: (POGOProtos.Data.Badge.IAwardedGymBadge|null);
                public checkin_image_url: string;
                public event_info?: (POGOProtos.Data.Raid.IEventInfo|null);
                public display_weather?: (POGOProtos.Map.Weather.IDisplayWeather|null);
                public static create(properties?: POGOProtos.Networking.Responses.IGymGetInfoResponse): POGOProtos.Networking.Responses.GymGetInfoResponse;
                public static encode(message: POGOProtos.Networking.Responses.IGymGetInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IGymGetInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.GymGetInfoResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.GymGetInfoResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.GymGetInfoResponse;
                public static toObject(message: POGOProtos.Networking.Responses.GymGetInfoResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace GymGetInfoResponse {

                enum Result {
                    UNSET = 0,
                    SUCCESS = 1,
                    ERROR_NOT_IN_RANGE = 2,
                    ERROR_GYM_DISABLED = 3
                }
            }

            interface IIncenseEncounterResponse {
                result?: (POGOProtos.Networking.Responses.IncenseEncounterResponse.Result|null);
                pokemon_data?: (POGOProtos.Data.IPokemonData|null);
                capture_probability?: (POGOProtos.Data.Capture.ICaptureProbability|null);
                active_item?: (POGOProtos.Inventory.Item.ItemId|null);
                arplus_attempts_until_flee?: (number|null);
            }

            class IncenseEncounterResponse implements IIncenseEncounterResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IIncenseEncounterResponse);
                public result: POGOProtos.Networking.Responses.IncenseEncounterResponse.Result;
                public pokemon_data?: (POGOProtos.Data.IPokemonData|null);
                public capture_probability?: (POGOProtos.Data.Capture.ICaptureProbability|null);
                public active_item: POGOProtos.Inventory.Item.ItemId;
                public arplus_attempts_until_flee: number;
                public static create(properties?: POGOProtos.Networking.Responses.IIncenseEncounterResponse): POGOProtos.Networking.Responses.IncenseEncounterResponse;
                public static encode(message: POGOProtos.Networking.Responses.IIncenseEncounterResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IIncenseEncounterResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.IncenseEncounterResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.IncenseEncounterResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.IncenseEncounterResponse;
                public static toObject(message: POGOProtos.Networking.Responses.IncenseEncounterResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace IncenseEncounterResponse {

                enum Result {
                    INCENSE_ENCOUNTER_UNKNOWN = 0,
                    INCENSE_ENCOUNTER_SUCCESS = 1,
                    INCENSE_ENCOUNTER_NOT_AVAILABLE = 2,
                    POKEMON_INVENTORY_FULL = 3
                }
            }

            interface ILevelUpRewardsResponse {
                result?: (POGOProtos.Networking.Responses.LevelUpRewardsResponse.Result|null);
                items_awarded?: (POGOProtos.Inventory.Item.IItemAward[]|null);
                items_unlocked?: (POGOProtos.Inventory.Item.ItemId[]|null);
                avatar_template_ids?: (string[]|null);
            }

            class LevelUpRewardsResponse implements ILevelUpRewardsResponse {
                constructor(properties?: POGOProtos.Networking.Responses.ILevelUpRewardsResponse);
                public result: POGOProtos.Networking.Responses.LevelUpRewardsResponse.Result;
                public items_awarded: POGOProtos.Inventory.Item.IItemAward[];
                public items_unlocked: POGOProtos.Inventory.Item.ItemId[];
                public avatar_template_ids: string[];
                public static create(properties?: POGOProtos.Networking.Responses.ILevelUpRewardsResponse): POGOProtos.Networking.Responses.LevelUpRewardsResponse;
                public static encode(message: POGOProtos.Networking.Responses.ILevelUpRewardsResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.ILevelUpRewardsResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.LevelUpRewardsResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.LevelUpRewardsResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.LevelUpRewardsResponse;
                public static toObject(message: POGOProtos.Networking.Responses.LevelUpRewardsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace LevelUpRewardsResponse {

                enum Result {
                    UNSET = 0,
                    SUCCESS = 1,
                    AWARDED_ALREADY = 2
                }
            }

            interface IListAvatarCustomizationsResponse {
                result?: (POGOProtos.Networking.Responses.ListAvatarCustomizationsResponse.Result|null);
                avatar_customizations?: (POGOProtos.Data.Avatar.IAvatarCustomization[]|null);
            }

            class ListAvatarCustomizationsResponse implements IListAvatarCustomizationsResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IListAvatarCustomizationsResponse);
                public result: POGOProtos.Networking.Responses.ListAvatarCustomizationsResponse.Result;
                public avatar_customizations: POGOProtos.Data.Avatar.IAvatarCustomization[];
                public static create(properties?: POGOProtos.Networking.Responses.IListAvatarCustomizationsResponse): POGOProtos.Networking.Responses.ListAvatarCustomizationsResponse;
                public static encode(message: POGOProtos.Networking.Responses.IListAvatarCustomizationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IListAvatarCustomizationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.ListAvatarCustomizationsResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.ListAvatarCustomizationsResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.ListAvatarCustomizationsResponse;
                public static toObject(message: POGOProtos.Networking.Responses.ListAvatarCustomizationsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace ListAvatarCustomizationsResponse {

                enum Result {
                    UNSET = 0,
                    SUCCESS = 1,
                    FAILURE = 2
                }
            }

            interface IListGymBadgesResponse {
                gym_badge?: (POGOProtos.Data.Badge.IAwardedGymBadge[]|null);
            }

            class ListGymBadgesResponse implements IListGymBadgesResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IListGymBadgesResponse);
                public gym_badge: POGOProtos.Data.Badge.IAwardedGymBadge[];
                public static create(properties?: POGOProtos.Networking.Responses.IListGymBadgesResponse): POGOProtos.Networking.Responses.ListGymBadgesResponse;
                public static encode(message: POGOProtos.Networking.Responses.IListGymBadgesResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IListGymBadgesResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.ListGymBadgesResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.ListGymBadgesResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.ListGymBadgesResponse;
                public static toObject(message: POGOProtos.Networking.Responses.ListGymBadgesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IMarkReadNewsArticleResponse {
                result?: (POGOProtos.Networking.Responses.MarkReadNewsArticleResponse.Result|null);
            }

            class MarkReadNewsArticleResponse implements IMarkReadNewsArticleResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IMarkReadNewsArticleResponse);
                public result: POGOProtos.Networking.Responses.MarkReadNewsArticleResponse.Result;
                public static create(properties?: POGOProtos.Networking.Responses.IMarkReadNewsArticleResponse): POGOProtos.Networking.Responses.MarkReadNewsArticleResponse;
                public static encode(message: POGOProtos.Networking.Responses.IMarkReadNewsArticleResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IMarkReadNewsArticleResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.MarkReadNewsArticleResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.MarkReadNewsArticleResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.MarkReadNewsArticleResponse;
                public static toObject(message: POGOProtos.Networking.Responses.MarkReadNewsArticleResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace MarkReadNewsArticleResponse {

                enum Result {
                    UNSET = 0,
                    SUCCESS = 1,
                    NO_NEWS_FOUND = 2
                }
            }

            interface IMarkTutorialCompleteResponse {
                success?: (boolean|null);
                player_data?: (POGOProtos.Data.IPlayerData|null);
            }

            class MarkTutorialCompleteResponse implements IMarkTutorialCompleteResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IMarkTutorialCompleteResponse);
                public success: boolean;
                public player_data?: (POGOProtos.Data.IPlayerData|null);
                public static create(properties?: POGOProtos.Networking.Responses.IMarkTutorialCompleteResponse): POGOProtos.Networking.Responses.MarkTutorialCompleteResponse;
                public static encode(message: POGOProtos.Networking.Responses.IMarkTutorialCompleteResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IMarkTutorialCompleteResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.MarkTutorialCompleteResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.MarkTutorialCompleteResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.MarkTutorialCompleteResponse;
                public static toObject(message: POGOProtos.Networking.Responses.MarkTutorialCompleteResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface INicknamePokemonResponse {
                result?: (POGOProtos.Networking.Responses.NicknamePokemonResponse.Result|null);
            }

            class NicknamePokemonResponse implements INicknamePokemonResponse {
                constructor(properties?: POGOProtos.Networking.Responses.INicknamePokemonResponse);
                public result: POGOProtos.Networking.Responses.NicknamePokemonResponse.Result;
                public static create(properties?: POGOProtos.Networking.Responses.INicknamePokemonResponse): POGOProtos.Networking.Responses.NicknamePokemonResponse;
                public static encode(message: POGOProtos.Networking.Responses.INicknamePokemonResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.INicknamePokemonResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.NicknamePokemonResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.NicknamePokemonResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.NicknamePokemonResponse;
                public static toObject(message: POGOProtos.Networking.Responses.NicknamePokemonResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace NicknamePokemonResponse {

                enum Result {
                    UNSET = 0,
                    SUCCESS = 1,
                    ERROR_INVALID_NICKNAME = 2,
                    ERROR_POKEMON_NOT_FOUND = 3,
                    ERROR_POKEMON_IS_EGG = 4
                }
            }

            interface IRegisterPushNotificationResponse {
                result?: (POGOProtos.Networking.Responses.RegisterPushNotificationResponse.Result|null);
            }

            class RegisterPushNotificationResponse implements IRegisterPushNotificationResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IRegisterPushNotificationResponse);
                public result: POGOProtos.Networking.Responses.RegisterPushNotificationResponse.Result;
                public static create(properties?: POGOProtos.Networking.Responses.IRegisterPushNotificationResponse): POGOProtos.Networking.Responses.RegisterPushNotificationResponse;
                public static encode(message: POGOProtos.Networking.Responses.IRegisterPushNotificationResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IRegisterPushNotificationResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.RegisterPushNotificationResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.RegisterPushNotificationResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.RegisterPushNotificationResponse;
                public static toObject(message: POGOProtos.Networking.Responses.RegisterPushNotificationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace RegisterPushNotificationResponse {

                enum Result {
                    UNSET = 0,
                    SUCCESS = 1,
                    NO_CHANGE = 2
                }
            }

            interface IUpdateNotificationStatusResponse {
                notification_ids?: (string[]|null);
                create_timestamp_ms?: ((number|Long)[]|null);
                state?: (POGOProtos.Networking.Responses.UpdateNotificationStatusResponse.NotificationState|null);
            }

            class UpdateNotificationStatusResponse implements IUpdateNotificationStatusResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IUpdateNotificationStatusResponse);
                public notification_ids: string[];
                public create_timestamp_ms: (number|Long)[];
                public state: POGOProtos.Networking.Responses.UpdateNotificationStatusResponse.NotificationState;
                public static create(properties?: POGOProtos.Networking.Responses.IUpdateNotificationStatusResponse): POGOProtos.Networking.Responses.UpdateNotificationStatusResponse;
                public static encode(message: POGOProtos.Networking.Responses.IUpdateNotificationStatusResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IUpdateNotificationStatusResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.UpdateNotificationStatusResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.UpdateNotificationStatusResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.UpdateNotificationStatusResponse;
                public static toObject(message: POGOProtos.Networking.Responses.UpdateNotificationStatusResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace UpdateNotificationStatusResponse {

                enum NotificationState {
                    UNSET_STATE = 0,
                    VIEWED = 1
                }
            }

            interface IOptOutPushNotificationCategoryResponse {
            }

            class OptOutPushNotificationCategoryResponse implements IOptOutPushNotificationCategoryResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IOptOutPushNotificationCategoryResponse);
                public static create(properties?: POGOProtos.Networking.Responses.IOptOutPushNotificationCategoryResponse): POGOProtos.Networking.Responses.OptOutPushNotificationCategoryResponse;
                public static encode(message: POGOProtos.Networking.Responses.IOptOutPushNotificationCategoryResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IOptOutPushNotificationCategoryResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.OptOutPushNotificationCategoryResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.OptOutPushNotificationCategoryResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.OptOutPushNotificationCategoryResponse;
                public static toObject(message: POGOProtos.Networking.Responses.OptOutPushNotificationCategoryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IQuestEncounterResponse {
                result?: (POGOProtos.Networking.Responses.QuestEncounterResponse.Result|null);
                pokemon?: (POGOProtos.Map.Pokemon.IWildPokemon|null);
                capture_probability?: (POGOProtos.Data.Capture.ICaptureProbability|null);
                active_item?: (POGOProtos.Inventory.Item.ItemId|null);
            }

            class QuestEncounterResponse implements IQuestEncounterResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IQuestEncounterResponse);
                public result: POGOProtos.Networking.Responses.QuestEncounterResponse.Result;
                public pokemon?: (POGOProtos.Map.Pokemon.IWildPokemon|null);
                public capture_probability?: (POGOProtos.Data.Capture.ICaptureProbability|null);
                public active_item: POGOProtos.Inventory.Item.ItemId;
                public static create(properties?: POGOProtos.Networking.Responses.IQuestEncounterResponse): POGOProtos.Networking.Responses.QuestEncounterResponse;
                public static encode(message: POGOProtos.Networking.Responses.IQuestEncounterResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IQuestEncounterResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.QuestEncounterResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.QuestEncounterResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.QuestEncounterResponse;
                public static toObject(message: POGOProtos.Networking.Responses.QuestEncounterResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace QuestEncounterResponse {

                enum Result {
                    QUEST_ENCOUNTER_UNKNOWN = 0,
                    QUEST_ENCOUNTER_SUCCESS = 1,
                    QUEST_ENCOUNTER_NOT_AVAILABLE = 2,
                    QUEST_ENCOUNTER_ALREADY_FINISHED = 3,
                    POKEMON_INVENTORY_FULL = 4
                }
            }

            interface IRecycleInventoryItemResponse {
                result?: (POGOProtos.Networking.Responses.RecycleInventoryItemResponse.Result|null);
                new_count?: (number|null);
            }

            class RecycleInventoryItemResponse implements IRecycleInventoryItemResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IRecycleInventoryItemResponse);
                public result: POGOProtos.Networking.Responses.RecycleInventoryItemResponse.Result;
                public new_count: number;
                public static create(properties?: POGOProtos.Networking.Responses.IRecycleInventoryItemResponse): POGOProtos.Networking.Responses.RecycleInventoryItemResponse;
                public static encode(message: POGOProtos.Networking.Responses.IRecycleInventoryItemResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IRecycleInventoryItemResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.RecycleInventoryItemResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.RecycleInventoryItemResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.RecycleInventoryItemResponse;
                public static toObject(message: POGOProtos.Networking.Responses.RecycleInventoryItemResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace RecycleInventoryItemResponse {

                enum Result {
                    UNSET = 0,
                    SUCCESS = 1,
                    ERROR_NOT_ENOUGH_COPIES = 2,
                    ERROR_CANNOT_RECYCLE_INCUBATORS = 3
                }
            }

            interface IRedeemPasscodeResponse {
                result?: (POGOProtos.Networking.Responses.RedeemPasscodeResponse.Result|null);
                acquired_item?: (POGOProtos.Networking.Responses.RedeemPasscodeResponse.IAcquiredItem[]|null);
                acquired_items_proto?: (Uint8Array|null);
                passcode?: (string|null);
            }

            class RedeemPasscodeResponse implements IRedeemPasscodeResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IRedeemPasscodeResponse);
                public result: POGOProtos.Networking.Responses.RedeemPasscodeResponse.Result;
                public acquired_item: POGOProtos.Networking.Responses.RedeemPasscodeResponse.IAcquiredItem[];
                public acquired_items_proto: Uint8Array;
                public passcode: string;
                public static create(properties?: POGOProtos.Networking.Responses.IRedeemPasscodeResponse): POGOProtos.Networking.Responses.RedeemPasscodeResponse;
                public static encode(message: POGOProtos.Networking.Responses.IRedeemPasscodeResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IRedeemPasscodeResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.RedeemPasscodeResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.RedeemPasscodeResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.RedeemPasscodeResponse;
                public static toObject(message: POGOProtos.Networking.Responses.RedeemPasscodeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace RedeemPasscodeResponse {

                interface IAcquiredItem {
                    item?: (string|null);
                    count?: (number|Long|null);
                }

                class AcquiredItem implements IAcquiredItem {
                    constructor(properties?: POGOProtos.Networking.Responses.RedeemPasscodeResponse.IAcquiredItem);
                    public item: string;
                    public count: (number|Long);
                    public static create(properties?: POGOProtos.Networking.Responses.RedeemPasscodeResponse.IAcquiredItem): POGOProtos.Networking.Responses.RedeemPasscodeResponse.AcquiredItem;
                    public static encode(message: POGOProtos.Networking.Responses.RedeemPasscodeResponse.IAcquiredItem, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Networking.Responses.RedeemPasscodeResponse.IAcquiredItem, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.RedeemPasscodeResponse.AcquiredItem;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.RedeemPasscodeResponse.AcquiredItem;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.RedeemPasscodeResponse.AcquiredItem;
                    public static toObject(message: POGOProtos.Networking.Responses.RedeemPasscodeResponse.AcquiredItem, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                enum Result {
                    UNSET = 0,
                    SUCCESS = 1,
                    NOT_AVAILABLE = 2,
                    OVER_INVENTORY_LIMIT = 3,
                    ALREADY_REDEEMED = 4
                }
            }

            interface IRegisterBackgroundDeviceResponse {
                status?: (POGOProtos.Networking.Responses.RegisterBackgroundDeviceResponse.Status|null);
                token?: (POGOProtos.Data.IBackgroundToken|null);
            }

            class RegisterBackgroundDeviceResponse implements IRegisterBackgroundDeviceResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IRegisterBackgroundDeviceResponse);
                public status: POGOProtos.Networking.Responses.RegisterBackgroundDeviceResponse.Status;
                public token?: (POGOProtos.Data.IBackgroundToken|null);
                public static create(properties?: POGOProtos.Networking.Responses.IRegisterBackgroundDeviceResponse): POGOProtos.Networking.Responses.RegisterBackgroundDeviceResponse;
                public static encode(message: POGOProtos.Networking.Responses.IRegisterBackgroundDeviceResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IRegisterBackgroundDeviceResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.RegisterBackgroundDeviceResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.RegisterBackgroundDeviceResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.RegisterBackgroundDeviceResponse;
                public static toObject(message: POGOProtos.Networking.Responses.RegisterBackgroundDeviceResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace RegisterBackgroundDeviceResponse {

                enum Status {
                    UNSET = 0,
                    SUCCESS = 1,
                    ERROR = 2
                }
            }

            interface IReleasePokemonResponse {
                result?: (POGOProtos.Networking.Responses.ReleasePokemonResponse.Result|null);
                candy_awarded?: (number|null);
            }

            class ReleasePokemonResponse implements IReleasePokemonResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IReleasePokemonResponse);
                public result: POGOProtos.Networking.Responses.ReleasePokemonResponse.Result;
                public candy_awarded: number;
                public static create(properties?: POGOProtos.Networking.Responses.IReleasePokemonResponse): POGOProtos.Networking.Responses.ReleasePokemonResponse;
                public static encode(message: POGOProtos.Networking.Responses.IReleasePokemonResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IReleasePokemonResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.ReleasePokemonResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.ReleasePokemonResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.ReleasePokemonResponse;
                public static toObject(message: POGOProtos.Networking.Responses.ReleasePokemonResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace ReleasePokemonResponse {

                enum Result {
                    UNSET = 0,
                    SUCCESS = 1,
                    POKEMON_DEPLOYED = 2,
                    FAILED = 3,
                    ERROR_POKEMON_IS_EGG = 4,
                    ERROR_POKEMON_IS_BUDDY = 5
                }
            }

            interface IRemoveQuestResponse {
                status?: (POGOProtos.Networking.Responses.RemoveQuestResponse.Status|null);
            }

            class RemoveQuestResponse implements IRemoveQuestResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IRemoveQuestResponse);
                public status: POGOProtos.Networking.Responses.RemoveQuestResponse.Status;
                public static create(properties?: POGOProtos.Networking.Responses.IRemoveQuestResponse): POGOProtos.Networking.Responses.RemoveQuestResponse;
                public static encode(message: POGOProtos.Networking.Responses.IRemoveQuestResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IRemoveQuestResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.RemoveQuestResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.RemoveQuestResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.RemoveQuestResponse;
                public static toObject(message: POGOProtos.Networking.Responses.RemoveQuestResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace RemoveQuestResponse {

                enum Status {
                    UNSET = 0,
                    SUCCESS = 1,
                    ERROR_QUEST_NOT_FOUND = 2,
                    ERROR_STORY_QUEST_NOT_REMOVABLE = 3
                }
            }

            interface ISetAvatarItemAsViewedResponse {
                result?: (POGOProtos.Networking.Responses.SetAvatarItemAsViewedResponse.Result|null);
            }

            class SetAvatarItemAsViewedResponse implements ISetAvatarItemAsViewedResponse {
                constructor(properties?: POGOProtos.Networking.Responses.ISetAvatarItemAsViewedResponse);
                public result: POGOProtos.Networking.Responses.SetAvatarItemAsViewedResponse.Result;
                public static create(properties?: POGOProtos.Networking.Responses.ISetAvatarItemAsViewedResponse): POGOProtos.Networking.Responses.SetAvatarItemAsViewedResponse;
                public static encode(message: POGOProtos.Networking.Responses.ISetAvatarItemAsViewedResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.ISetAvatarItemAsViewedResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.SetAvatarItemAsViewedResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.SetAvatarItemAsViewedResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.SetAvatarItemAsViewedResponse;
                public static toObject(message: POGOProtos.Networking.Responses.SetAvatarItemAsViewedResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace SetAvatarItemAsViewedResponse {

                enum Result {
                    UNSET = 0,
                    SUCCESS = 1,
                    FAILURE = 2
                }
            }

            interface ISetAvatarResponse {
                status?: (POGOProtos.Networking.Responses.SetAvatarResponse.Status|null);
                player_data?: (POGOProtos.Data.IPlayerData|null);
            }

            class SetAvatarResponse implements ISetAvatarResponse {
                constructor(properties?: POGOProtos.Networking.Responses.ISetAvatarResponse);
                public status: POGOProtos.Networking.Responses.SetAvatarResponse.Status;
                public player_data?: (POGOProtos.Data.IPlayerData|null);
                public static create(properties?: POGOProtos.Networking.Responses.ISetAvatarResponse): POGOProtos.Networking.Responses.SetAvatarResponse;
                public static encode(message: POGOProtos.Networking.Responses.ISetAvatarResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.ISetAvatarResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.SetAvatarResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.SetAvatarResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.SetAvatarResponse;
                public static toObject(message: POGOProtos.Networking.Responses.SetAvatarResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace SetAvatarResponse {

                enum Status {
                    UNSET = 0,
                    SUCCESS = 1,
                    AVATAR_ALREADY_SET = 2,
                    FAILURE = 3,
                    SLOT_NOT_ALLOWED = 4,
                    ITEM_NOT_OWNED = 5,
                    INVALID_AVATAR_TYPE = 6
                }
            }

            interface ISetBuddyPokemonResponse {
                result?: (POGOProtos.Networking.Responses.SetBuddyPokemonResponse.Result|null);
                updated_buddy?: (POGOProtos.Data.IBuddyPokemon|null);
            }

            class SetBuddyPokemonResponse implements ISetBuddyPokemonResponse {
                constructor(properties?: POGOProtos.Networking.Responses.ISetBuddyPokemonResponse);
                public result: POGOProtos.Networking.Responses.SetBuddyPokemonResponse.Result;
                public updated_buddy?: (POGOProtos.Data.IBuddyPokemon|null);
                public static create(properties?: POGOProtos.Networking.Responses.ISetBuddyPokemonResponse): POGOProtos.Networking.Responses.SetBuddyPokemonResponse;
                public static encode(message: POGOProtos.Networking.Responses.ISetBuddyPokemonResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.ISetBuddyPokemonResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.SetBuddyPokemonResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.SetBuddyPokemonResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.SetBuddyPokemonResponse;
                public static toObject(message: POGOProtos.Networking.Responses.SetBuddyPokemonResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace SetBuddyPokemonResponse {

                enum Result {
                    UNEST = 0,
                    SUCCESS = 1,
                    ERROR_POKEMON_DEPLOYED = 2,
                    ERROR_POKEMON_NOT_OWNED = 3,
                    ERROR_POKEMON_IS_EGG = 4,
                    ERROR_INVALID_POKEMON = 5
                }
            }

            interface ISetContactSettingsResponse {
                status?: (POGOProtos.Networking.Responses.SetContactSettingsResponse.Status|null);
                player_data?: (POGOProtos.Data.IPlayerData|null);
            }

            class SetContactSettingsResponse implements ISetContactSettingsResponse {
                constructor(properties?: POGOProtos.Networking.Responses.ISetContactSettingsResponse);
                public status: POGOProtos.Networking.Responses.SetContactSettingsResponse.Status;
                public player_data?: (POGOProtos.Data.IPlayerData|null);
                public static create(properties?: POGOProtos.Networking.Responses.ISetContactSettingsResponse): POGOProtos.Networking.Responses.SetContactSettingsResponse;
                public static encode(message: POGOProtos.Networking.Responses.ISetContactSettingsResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.ISetContactSettingsResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.SetContactSettingsResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.SetContactSettingsResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.SetContactSettingsResponse;
                public static toObject(message: POGOProtos.Networking.Responses.SetContactSettingsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace SetContactSettingsResponse {

                enum Status {
                    UNSET = 0,
                    SUCCESS = 1,
                    FAILURE = 2
                }
            }

            interface ISetFavoritePokemonResponse {
                result?: (POGOProtos.Networking.Responses.SetFavoritePokemonResponse.Result|null);
            }

            class SetFavoritePokemonResponse implements ISetFavoritePokemonResponse {
                constructor(properties?: POGOProtos.Networking.Responses.ISetFavoritePokemonResponse);
                public result: POGOProtos.Networking.Responses.SetFavoritePokemonResponse.Result;
                public static create(properties?: POGOProtos.Networking.Responses.ISetFavoritePokemonResponse): POGOProtos.Networking.Responses.SetFavoritePokemonResponse;
                public static encode(message: POGOProtos.Networking.Responses.ISetFavoritePokemonResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.ISetFavoritePokemonResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.SetFavoritePokemonResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.SetFavoritePokemonResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.SetFavoritePokemonResponse;
                public static toObject(message: POGOProtos.Networking.Responses.SetFavoritePokemonResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace SetFavoritePokemonResponse {

                enum Result {
                    UNSET = 0,
                    SUCCESS = 1,
                    ERROR_POKEMON_NOT_FOUND = 2,
                    ERROR_POKEMON_IS_EGG = 3
                }
            }

            interface ISetPlayerTeamResponse {
                status?: (POGOProtos.Networking.Responses.SetPlayerTeamResponse.Status|null);
                player_data?: (POGOProtos.Data.IPlayerData|null);
            }

            class SetPlayerTeamResponse implements ISetPlayerTeamResponse {
                constructor(properties?: POGOProtos.Networking.Responses.ISetPlayerTeamResponse);
                public status: POGOProtos.Networking.Responses.SetPlayerTeamResponse.Status;
                public player_data?: (POGOProtos.Data.IPlayerData|null);
                public static create(properties?: POGOProtos.Networking.Responses.ISetPlayerTeamResponse): POGOProtos.Networking.Responses.SetPlayerTeamResponse;
                public static encode(message: POGOProtos.Networking.Responses.ISetPlayerTeamResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.ISetPlayerTeamResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.SetPlayerTeamResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.SetPlayerTeamResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.SetPlayerTeamResponse;
                public static toObject(message: POGOProtos.Networking.Responses.SetPlayerTeamResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace SetPlayerTeamResponse {

                enum Status {
                    UNSET = 0,
                    SUCCESS = 1,
                    TEAM_ALREADY_SET = 2,
                    FAILURE = 3
                }
            }

            interface ISfidaActionLogResponse {
                result?: (POGOProtos.Networking.Responses.SfidaActionLogResponse.Result|null);
                log_entries?: (POGOProtos.Data.Logs.IActionLogEntry[]|null);
            }

            class SfidaActionLogResponse implements ISfidaActionLogResponse {
                constructor(properties?: POGOProtos.Networking.Responses.ISfidaActionLogResponse);
                public result: POGOProtos.Networking.Responses.SfidaActionLogResponse.Result;
                public log_entries: POGOProtos.Data.Logs.IActionLogEntry[];
                public static create(properties?: POGOProtos.Networking.Responses.ISfidaActionLogResponse): POGOProtos.Networking.Responses.SfidaActionLogResponse;
                public static encode(message: POGOProtos.Networking.Responses.ISfidaActionLogResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.ISfidaActionLogResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.SfidaActionLogResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.SfidaActionLogResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.SfidaActionLogResponse;
                public static toObject(message: POGOProtos.Networking.Responses.SfidaActionLogResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace SfidaActionLogResponse {

                enum Result {
                    UNSET = 0,
                    SUCCESS = 1
                }
            }

            interface ISfidaRegistrationResponse {
                access_token?: (Uint8Array|null);
            }

            class SfidaRegistrationResponse implements ISfidaRegistrationResponse {
                constructor(properties?: POGOProtos.Networking.Responses.ISfidaRegistrationResponse);
                public access_token: Uint8Array;
                public static create(properties?: POGOProtos.Networking.Responses.ISfidaRegistrationResponse): POGOProtos.Networking.Responses.SfidaRegistrationResponse;
                public static encode(message: POGOProtos.Networking.Responses.ISfidaRegistrationResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.ISfidaRegistrationResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.SfidaRegistrationResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.SfidaRegistrationResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.SfidaRegistrationResponse;
                public static toObject(message: POGOProtos.Networking.Responses.SfidaRegistrationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IStartGymBattleResponse {
                result?: (POGOProtos.Networking.Responses.StartGymBattleResponse.Result|null);
                battle_start_timestamp_ms?: (number|Long|null);
                battle_end_timestamp_ms?: (number|Long|null);
                battle_id?: (string|null);
                defender?: (POGOProtos.Data.Battle.IBattleParticipant|null);
                battle_log?: (POGOProtos.Data.Battle.IBattleLog|null);
                attacker?: (POGOProtos.Data.Battle.IBattleParticipant|null);
                battle?: (POGOProtos.Data.Battle.IBattle|null);
            }

            class StartGymBattleResponse implements IStartGymBattleResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IStartGymBattleResponse);
                public result: POGOProtos.Networking.Responses.StartGymBattleResponse.Result;
                public battle_start_timestamp_ms: (number|Long);
                public battle_end_timestamp_ms: (number|Long);
                public battle_id: string;
                public defender?: (POGOProtos.Data.Battle.IBattleParticipant|null);
                public battle_log?: (POGOProtos.Data.Battle.IBattleLog|null);
                public attacker?: (POGOProtos.Data.Battle.IBattleParticipant|null);
                public battle?: (POGOProtos.Data.Battle.IBattle|null);
                public static create(properties?: POGOProtos.Networking.Responses.IStartGymBattleResponse): POGOProtos.Networking.Responses.StartGymBattleResponse;
                public static encode(message: POGOProtos.Networking.Responses.IStartGymBattleResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IStartGymBattleResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.StartGymBattleResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.StartGymBattleResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.StartGymBattleResponse;
                public static toObject(message: POGOProtos.Networking.Responses.StartGymBattleResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace StartGymBattleResponse {

                enum Result {
                    UNSET = 0,
                    SUCCESS = 1,
                    ERROR_GYM_NOT_FOUND = 2,
                    ERROR_GYM_NEUTRAL = 3,
                    ERROR_GYM_WRONG_TEAM = 4,
                    ERROR_GYM_EMPTY = 5,
                    ERROR_INVALID_DEFENDER = 6,
                    ERROR_TRAINING_INVALID_ATTACKER_COUNT = 7,
                    ERROR_ALL_POKEMON_FAINTED = 8,
                    ERROR_TOO_MANY_BATTLES = 9,
                    ERROR_TOO_MANY_PLAYERS = 10,
                    ERROR_GYM_BATTLE_LOCKOUT = 11,
                    ERROR_PLAYER_BELOW_MINIMUM_LEVEL = 12,
                    ERROR_NOT_IN_RANGE = 13,
                    ERROR_POI_INACCESSIBLE = 14
                }
            }

            interface IUpdateNotificationResponse {
                notification_ids?: (string[]|null);
                create_timestamp_ms?: ((number|Long)[]|null);
                state?: (POGOProtos.Enums.NotificationState|null);
            }

            class UpdateNotificationResponse implements IUpdateNotificationResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IUpdateNotificationResponse);
                public notification_ids: string[];
                public create_timestamp_ms: (number|Long)[];
                public state: POGOProtos.Enums.NotificationState;
                public static create(properties?: POGOProtos.Networking.Responses.IUpdateNotificationResponse): POGOProtos.Networking.Responses.UpdateNotificationResponse;
                public static encode(message: POGOProtos.Networking.Responses.IUpdateNotificationResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IUpdateNotificationResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.UpdateNotificationResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.UpdateNotificationResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.UpdateNotificationResponse;
                public static toObject(message: POGOProtos.Networking.Responses.UpdateNotificationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IUpgradePokemonResponse {
                result?: (POGOProtos.Networking.Responses.UpgradePokemonResponse.Result|null);
                upgraded_pokemon?: (POGOProtos.Data.IPokemonData|null);
            }

            class UpgradePokemonResponse implements IUpgradePokemonResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IUpgradePokemonResponse);
                public result: POGOProtos.Networking.Responses.UpgradePokemonResponse.Result;
                public upgraded_pokemon?: (POGOProtos.Data.IPokemonData|null);
                public static create(properties?: POGOProtos.Networking.Responses.IUpgradePokemonResponse): POGOProtos.Networking.Responses.UpgradePokemonResponse;
                public static encode(message: POGOProtos.Networking.Responses.IUpgradePokemonResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IUpgradePokemonResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.UpgradePokemonResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.UpgradePokemonResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.UpgradePokemonResponse;
                public static toObject(message: POGOProtos.Networking.Responses.UpgradePokemonResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace UpgradePokemonResponse {

                enum Result {
                    UNSET = 0,
                    SUCCESS = 1,
                    ERROR_POKEMON_NOT_FOUND = 2,
                    ERROR_INSUFFICIENT_RESOURCES = 3,
                    ERROR_UPGRADE_NOT_AVAILABLE = 4,
                    ERROR_POKEMON_IS_DEPLOYED = 5
                }
            }

            interface IUseIncenseResponse {
                result?: (POGOProtos.Networking.Responses.UseIncenseResponse.Result|null);
                applied_incense?: (POGOProtos.Inventory.IAppliedItem|null);
            }

            class UseIncenseResponse implements IUseIncenseResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IUseIncenseResponse);
                public result: POGOProtos.Networking.Responses.UseIncenseResponse.Result;
                public applied_incense?: (POGOProtos.Inventory.IAppliedItem|null);
                public static create(properties?: POGOProtos.Networking.Responses.IUseIncenseResponse): POGOProtos.Networking.Responses.UseIncenseResponse;
                public static encode(message: POGOProtos.Networking.Responses.IUseIncenseResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IUseIncenseResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.UseIncenseResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.UseIncenseResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.UseIncenseResponse;
                public static toObject(message: POGOProtos.Networking.Responses.UseIncenseResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace UseIncenseResponse {

                enum Result {
                    UNKNOWN = 0,
                    SUCCESS = 1,
                    INCENSE_ALREADY_ACTIVE = 2,
                    NONE_IN_INVENTORY = 3,
                    LOCATION_UNSET = 4
                }
            }

            interface IUseItemCaptureResponse {
                success?: (boolean|null);
                item_capture_mult?: (number|null);
                item_flee_mult?: (number|null);
                stop_movement?: (boolean|null);
                stop_attack?: (boolean|null);
                target_max?: (boolean|null);
                target_slow?: (boolean|null);
            }

            class UseItemCaptureResponse implements IUseItemCaptureResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IUseItemCaptureResponse);
                public success: boolean;
                public item_capture_mult: number;
                public item_flee_mult: number;
                public stop_movement: boolean;
                public stop_attack: boolean;
                public target_max: boolean;
                public target_slow: boolean;
                public static create(properties?: POGOProtos.Networking.Responses.IUseItemCaptureResponse): POGOProtos.Networking.Responses.UseItemCaptureResponse;
                public static encode(message: POGOProtos.Networking.Responses.IUseItemCaptureResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IUseItemCaptureResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.UseItemCaptureResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.UseItemCaptureResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.UseItemCaptureResponse;
                public static toObject(message: POGOProtos.Networking.Responses.UseItemCaptureResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IUseItemEggIncubatorResponse {
                result?: (POGOProtos.Networking.Responses.UseItemEggIncubatorResponse.Result|null);
                egg_incubator?: (POGOProtos.Inventory.IEggIncubator|null);
            }

            class UseItemEggIncubatorResponse implements IUseItemEggIncubatorResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IUseItemEggIncubatorResponse);
                public result: POGOProtos.Networking.Responses.UseItemEggIncubatorResponse.Result;
                public egg_incubator?: (POGOProtos.Inventory.IEggIncubator|null);
                public static create(properties?: POGOProtos.Networking.Responses.IUseItemEggIncubatorResponse): POGOProtos.Networking.Responses.UseItemEggIncubatorResponse;
                public static encode(message: POGOProtos.Networking.Responses.IUseItemEggIncubatorResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IUseItemEggIncubatorResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.UseItemEggIncubatorResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.UseItemEggIncubatorResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.UseItemEggIncubatorResponse;
                public static toObject(message: POGOProtos.Networking.Responses.UseItemEggIncubatorResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace UseItemEggIncubatorResponse {

                enum Result {
                    UNSET = 0,
                    SUCCESS = 1,
                    ERROR_INCUBATOR_NOT_FOUND = 2,
                    ERROR_POKEMON_EGG_NOT_FOUND = 3,
                    ERROR_POKEMON_ID_NOT_EGG = 4,
                    ERROR_INCUBATOR_ALREADY_IN_USE = 5,
                    ERROR_POKEMON_ALREADY_INCUBATING = 6,
                    ERROR_INCUBATOR_NO_USES_REMAINING = 7
                }
            }

            interface IUseItemEncounterResponse {
                status?: (POGOProtos.Networking.Responses.UseItemEncounterResponse.Status|null);
                capture_probability?: (POGOProtos.Data.Capture.ICaptureProbability|null);
                active_item?: (POGOProtos.Inventory.Item.ItemId|null);
            }

            class UseItemEncounterResponse implements IUseItemEncounterResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IUseItemEncounterResponse);
                public status: POGOProtos.Networking.Responses.UseItemEncounterResponse.Status;
                public capture_probability?: (POGOProtos.Data.Capture.ICaptureProbability|null);
                public active_item: POGOProtos.Inventory.Item.ItemId;
                public static create(properties?: POGOProtos.Networking.Responses.IUseItemEncounterResponse): POGOProtos.Networking.Responses.UseItemEncounterResponse;
                public static encode(message: POGOProtos.Networking.Responses.IUseItemEncounterResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IUseItemEncounterResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.UseItemEncounterResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.UseItemEncounterResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.UseItemEncounterResponse;
                public static toObject(message: POGOProtos.Networking.Responses.UseItemEncounterResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace UseItemEncounterResponse {

                enum Status {
                    SUCCESS = 0,
                    ALREADY_COMPLETED = 1,
                    ACTIVE_ITEM_EXISTS = 2,
                    NO_ITEM_IN_INVENTORY = 3,
                    INVALID_ITEM_CATEGORY = 4
                }
            }

            interface IUseItemGymResponse {
                result?: (POGOProtos.Networking.Responses.UseItemGymResponse.Result|null);
                updated_gp?: (number|Long|null);
            }

            class UseItemGymResponse implements IUseItemGymResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IUseItemGymResponse);
                public result: POGOProtos.Networking.Responses.UseItemGymResponse.Result;
                public updated_gp: (number|Long);
                public static create(properties?: POGOProtos.Networking.Responses.IUseItemGymResponse): POGOProtos.Networking.Responses.UseItemGymResponse;
                public static encode(message: POGOProtos.Networking.Responses.IUseItemGymResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IUseItemGymResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.UseItemGymResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.UseItemGymResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.UseItemGymResponse;
                public static toObject(message: POGOProtos.Networking.Responses.UseItemGymResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace UseItemGymResponse {

                enum Result {
                    UNSET = 0,
                    SUCCESS = 1,
                    ERROR_CANNOT_USE = 2,
                    ERROR_NOT_IN_RANGE = 3
                }
            }

            interface IUseItemMoveRerollResponse {
                result?: (POGOProtos.Networking.Responses.UseItemMoveRerollResponse.Result|null);
                upgraded_pokemon?: (POGOProtos.Data.IPokemonData|null);
            }

            class UseItemMoveRerollResponse implements IUseItemMoveRerollResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IUseItemMoveRerollResponse);
                public result: POGOProtos.Networking.Responses.UseItemMoveRerollResponse.Result;
                public upgraded_pokemon?: (POGOProtos.Data.IPokemonData|null);
                public static create(properties?: POGOProtos.Networking.Responses.IUseItemMoveRerollResponse): POGOProtos.Networking.Responses.UseItemMoveRerollResponse;
                public static encode(message: POGOProtos.Networking.Responses.IUseItemMoveRerollResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IUseItemMoveRerollResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.UseItemMoveRerollResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.UseItemMoveRerollResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.UseItemMoveRerollResponse;
                public static toObject(message: POGOProtos.Networking.Responses.UseItemMoveRerollResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace UseItemMoveRerollResponse {

                enum Result {
                    UNSET = 0,
                    SUCCESS = 1,
                    NO_POKEMON = 2,
                    NO_OTHER_MOVES = 3,
                    NO_PLAYER = 4,
                    WRONG_ITEM_TYPE = 5,
                    ITEM_NOT_IN_INVENTORY = 6,
                    INVALID_POKEMON = 7
                }
            }

            interface IUseItemPotionResponse {
                result?: (POGOProtos.Networking.Responses.UseItemPotionResponse.Result|null);
                stamina?: (number|null);
            }

            class UseItemPotionResponse implements IUseItemPotionResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IUseItemPotionResponse);
                public result: POGOProtos.Networking.Responses.UseItemPotionResponse.Result;
                public stamina: number;
                public static create(properties?: POGOProtos.Networking.Responses.IUseItemPotionResponse): POGOProtos.Networking.Responses.UseItemPotionResponse;
                public static encode(message: POGOProtos.Networking.Responses.IUseItemPotionResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IUseItemPotionResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.UseItemPotionResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.UseItemPotionResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.UseItemPotionResponse;
                public static toObject(message: POGOProtos.Networking.Responses.UseItemPotionResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace UseItemPotionResponse {

                enum Result {
                    UNSET = 0,
                    SUCCESS = 1,
                    ERROR_NO_POKEMON = 2,
                    ERROR_CANNOT_USE = 3,
                    ERROR_DEPLOYED_TO_FORT = 4
                }
            }

            interface IUseItemRareCandyResponse {
                result?: (POGOProtos.Networking.Responses.UseItemRareCandyResponse.Result|null);
                pokemon_id?: (POGOProtos.Enums.PokemonId|null);
                updated_candy_count?: (number|null);
            }

            class UseItemRareCandyResponse implements IUseItemRareCandyResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IUseItemRareCandyResponse);
                public result: POGOProtos.Networking.Responses.UseItemRareCandyResponse.Result;
                public pokemon_id: POGOProtos.Enums.PokemonId;
                public updated_candy_count: number;
                public static create(properties?: POGOProtos.Networking.Responses.IUseItemRareCandyResponse): POGOProtos.Networking.Responses.UseItemRareCandyResponse;
                public static encode(message: POGOProtos.Networking.Responses.IUseItemRareCandyResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IUseItemRareCandyResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.UseItemRareCandyResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.UseItemRareCandyResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.UseItemRareCandyResponse;
                public static toObject(message: POGOProtos.Networking.Responses.UseItemRareCandyResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace UseItemRareCandyResponse {

                enum Result {
                    UNSET = 0,
                    SUCCESS = 1,
                    INVALID_POKEMON_ID = 2,
                    NO_PLAYER = 3,
                    WRONG_ITEM_TYPE = 4,
                    ITEM_NOT_IN_INVENTORY = 5
                }
            }

            interface IUseItemReviveResponse {
                result?: (POGOProtos.Networking.Responses.UseItemReviveResponse.Result|null);
                stamina?: (number|null);
            }

            class UseItemReviveResponse implements IUseItemReviveResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IUseItemReviveResponse);
                public result: POGOProtos.Networking.Responses.UseItemReviveResponse.Result;
                public stamina: number;
                public static create(properties?: POGOProtos.Networking.Responses.IUseItemReviveResponse): POGOProtos.Networking.Responses.UseItemReviveResponse;
                public static encode(message: POGOProtos.Networking.Responses.IUseItemReviveResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IUseItemReviveResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.UseItemReviveResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.UseItemReviveResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.UseItemReviveResponse;
                public static toObject(message: POGOProtos.Networking.Responses.UseItemReviveResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace UseItemReviveResponse {

                enum Result {
                    UNSET = 0,
                    SUCCESS = 1,
                    ERROR_NO_POKEMON = 2,
                    ERROR_CANNOT_USE = 3,
                    ERROR_DEPLOYED_TO_FORT = 4
                }
            }

            interface IUseItemStardustBoostResponse {
                result?: (POGOProtos.Networking.Responses.UseItemStardustBoostResponse.Result|null);
                applied_items?: (POGOProtos.Inventory.IAppliedItems|null);
            }

            class UseItemStardustBoostResponse implements IUseItemStardustBoostResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IUseItemStardustBoostResponse);
                public result: POGOProtos.Networking.Responses.UseItemStardustBoostResponse.Result;
                public applied_items?: (POGOProtos.Inventory.IAppliedItems|null);
                public static create(properties?: POGOProtos.Networking.Responses.IUseItemStardustBoostResponse): POGOProtos.Networking.Responses.UseItemStardustBoostResponse;
                public static encode(message: POGOProtos.Networking.Responses.IUseItemStardustBoostResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IUseItemStardustBoostResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.UseItemStardustBoostResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.UseItemStardustBoostResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.UseItemStardustBoostResponse;
                public static toObject(message: POGOProtos.Networking.Responses.UseItemStardustBoostResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace UseItemStardustBoostResponse {

                enum Result {
                    UNSET = 0,
                    SUCCESS = 1,
                    ERROR_INVALID_ITEM_TYPE = 2,
                    ERROR_STARDUST_BOOST_ALREADY_ACTIVE = 3,
                    ERROR_NO_ITEMS_REMAINING = 4,
                    ERROR_LOCATION_UNSET = 5
                }
            }

            interface IUseItemXpBoostResponse {
                result?: (POGOProtos.Networking.Responses.UseItemXpBoostResponse.Result|null);
                applied_items?: (POGOProtos.Inventory.IAppliedItems|null);
            }

            class UseItemXpBoostResponse implements IUseItemXpBoostResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IUseItemXpBoostResponse);
                public result: POGOProtos.Networking.Responses.UseItemXpBoostResponse.Result;
                public applied_items?: (POGOProtos.Inventory.IAppliedItems|null);
                public static create(properties?: POGOProtos.Networking.Responses.IUseItemXpBoostResponse): POGOProtos.Networking.Responses.UseItemXpBoostResponse;
                public static encode(message: POGOProtos.Networking.Responses.IUseItemXpBoostResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IUseItemXpBoostResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.UseItemXpBoostResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.UseItemXpBoostResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.UseItemXpBoostResponse;
                public static toObject(message: POGOProtos.Networking.Responses.UseItemXpBoostResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace UseItemXpBoostResponse {

                enum Result {
                    UNSET = 0,
                    SUCCESS = 1,
                    ERROR_INVALID_ITEM_TYPE = 2,
                    ERROR_XP_BOOST_ALREADY_ACTIVE = 3,
                    ERROR_NO_ITEMS_REMAINING = 4,
                    ERROR_LOCATION_UNSET = 5
                }
            }

            interface IVerifyChallengeResponse {
                success?: (boolean|null);
            }

            class VerifyChallengeResponse implements IVerifyChallengeResponse {
                constructor(properties?: POGOProtos.Networking.Responses.IVerifyChallengeResponse);
                public success: boolean;
                public static create(properties?: POGOProtos.Networking.Responses.IVerifyChallengeResponse): POGOProtos.Networking.Responses.VerifyChallengeResponse;
                public static encode(message: POGOProtos.Networking.Responses.IVerifyChallengeResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Networking.Responses.IVerifyChallengeResponse, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Networking.Responses.VerifyChallengeResponse;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Networking.Responses.VerifyChallengeResponse;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Networking.Responses.VerifyChallengeResponse;
                public static toObject(message: POGOProtos.Networking.Responses.VerifyChallengeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }
        }
    }

    namespace Settings {

        interface IClientPerformanceSettings {
            enable_local_disk_caching?: (boolean|null);
            max_number_local_battle_parties?: (number|null);
        }

        class ClientPerformanceSettings implements IClientPerformanceSettings {
            constructor(properties?: POGOProtos.Settings.IClientPerformanceSettings);
            public enable_local_disk_caching: boolean;
            public max_number_local_battle_parties: number;
            public static create(properties?: POGOProtos.Settings.IClientPerformanceSettings): POGOProtos.Settings.ClientPerformanceSettings;
            public static encode(message: POGOProtos.Settings.IClientPerformanceSettings, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: POGOProtos.Settings.IClientPerformanceSettings, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.ClientPerformanceSettings;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Settings.ClientPerformanceSettings;
            public static fromObject(object: { [k: string]: any }): POGOProtos.Settings.ClientPerformanceSettings;
            public static toObject(message: POGOProtos.Settings.ClientPerformanceSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IDownloadSettingsAction {
            hash?: (string|null);
        }

        class DownloadSettingsAction implements IDownloadSettingsAction {
            constructor(properties?: POGOProtos.Settings.IDownloadSettingsAction);
            public hash: string;
            public static create(properties?: POGOProtos.Settings.IDownloadSettingsAction): POGOProtos.Settings.DownloadSettingsAction;
            public static encode(message: POGOProtos.Settings.IDownloadSettingsAction, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: POGOProtos.Settings.IDownloadSettingsAction, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.DownloadSettingsAction;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Settings.DownloadSettingsAction;
            public static fromObject(object: { [k: string]: any }): POGOProtos.Settings.DownloadSettingsAction;
            public static toObject(message: POGOProtos.Settings.DownloadSettingsAction, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IEventSettings {
            condolence_ribbon_country?: (string[]|null);
        }

        class EventSettings implements IEventSettings {
            constructor(properties?: POGOProtos.Settings.IEventSettings);
            public condolence_ribbon_country: string[];
            public static create(properties?: POGOProtos.Settings.IEventSettings): POGOProtos.Settings.EventSettings;
            public static encode(message: POGOProtos.Settings.IEventSettings, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: POGOProtos.Settings.IEventSettings, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.EventSettings;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Settings.EventSettings;
            public static fromObject(object: { [k: string]: any }): POGOProtos.Settings.EventSettings;
            public static toObject(message: POGOProtos.Settings.EventSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IFestivalSettings {
            festival_type?: (POGOProtos.Settings.FestivalSettings.FestivalType|null);
            key?: (string|null);
            vector?: (string|null);
        }

        class FestivalSettings implements IFestivalSettings {
            constructor(properties?: POGOProtos.Settings.IFestivalSettings);
            public festival_type: POGOProtos.Settings.FestivalSettings.FestivalType;
            public key: string;
            public vector: string;
            public static create(properties?: POGOProtos.Settings.IFestivalSettings): POGOProtos.Settings.FestivalSettings;
            public static encode(message: POGOProtos.Settings.IFestivalSettings, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: POGOProtos.Settings.IFestivalSettings, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.FestivalSettings;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Settings.FestivalSettings;
            public static fromObject(object: { [k: string]: any }): POGOProtos.Settings.FestivalSettings;
            public static toObject(message: POGOProtos.Settings.FestivalSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        namespace FestivalSettings {

            enum FestivalType {
                NONE = 0,
                HALLOWEEN = 1,
                HOLIDAY = 2
            }
        }

        interface IFortSettings {
            interaction_range_meters?: (number|null);
            max_total_deployed_pokemon?: (number|null);
            max_player_deployed_pokemon?: (number|null);
            deploy_stamina_multiplier?: (number|null);
            deploy_attack_multiplier?: (number|null);
            far_interaction_range_meters?: (number|null);
            disable_gyms?: (boolean|null);
            max_same_pokemon_at_fort?: (number|null);
            max_player_total_deployed_pokemon?: (number|null);
        }

        class FortSettings implements IFortSettings {
            constructor(properties?: POGOProtos.Settings.IFortSettings);
            public interaction_range_meters: number;
            public max_total_deployed_pokemon: number;
            public max_player_deployed_pokemon: number;
            public deploy_stamina_multiplier: number;
            public deploy_attack_multiplier: number;
            public far_interaction_range_meters: number;
            public disable_gyms: boolean;
            public max_same_pokemon_at_fort: number;
            public max_player_total_deployed_pokemon: number;
            public static create(properties?: POGOProtos.Settings.IFortSettings): POGOProtos.Settings.FortSettings;
            public static encode(message: POGOProtos.Settings.IFortSettings, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: POGOProtos.Settings.IFortSettings, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.FortSettings;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Settings.FortSettings;
            public static fromObject(object: { [k: string]: any }): POGOProtos.Settings.FortSettings;
            public static toObject(message: POGOProtos.Settings.FortSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IGlobalSettings {
            fort_settings?: (POGOProtos.Settings.IFortSettings|null);
            map_settings?: (POGOProtos.Settings.IMapSettings|null);
            level_settings?: (POGOProtos.Settings.ILevelSettings|null);
            inventory_settings?: (POGOProtos.Settings.IInventorySettings|null);
            minimum_client_version?: (string|null);
            gps_settings?: (POGOProtos.Settings.IGpsSettings|null);
            festival_settings?: (POGOProtos.Settings.IFestivalSettings|null);
            event_settings?: (POGOProtos.Settings.IEventSettings|null);
            max_pokemon_types?: (number|null);
            sfida_settings?: (POGOProtos.Settings.ISfidaSettings|null);
            news_settings?: (POGOProtos.Settings.INewsSettings|null);
            translation_settings?: (POGOProtos.Settings.ITranslationSettings|null);
            passcode_settings?: (POGOProtos.Settings.IPasscodeSettings|null);
            notification_settings?: (POGOProtos.Settings.INotificationSettings|null);
            client_app_blacklist?: (string[]|null);
            client_perf_settings?: (POGOProtos.Settings.IClientPerformanceSettings|null);
            news_global_settings?: (POGOProtos.Settings.INewsGlobalSettings|null);
            metrics_global_settings?: (POGOProtos.Settings.IMetricsGlobalSettings|null);
            login_settings?: (POGOProtos.Settings.ILoginSettings|null);
            quest_global_settings?: (POGOProtos.Settings.IQuestGlobalSettings|null);
        }

        class GlobalSettings implements IGlobalSettings {
            constructor(properties?: POGOProtos.Settings.IGlobalSettings);
            public fort_settings?: (POGOProtos.Settings.IFortSettings|null);
            public map_settings?: (POGOProtos.Settings.IMapSettings|null);
            public level_settings?: (POGOProtos.Settings.ILevelSettings|null);
            public inventory_settings?: (POGOProtos.Settings.IInventorySettings|null);
            public minimum_client_version: string;
            public gps_settings?: (POGOProtos.Settings.IGpsSettings|null);
            public festival_settings?: (POGOProtos.Settings.IFestivalSettings|null);
            public event_settings?: (POGOProtos.Settings.IEventSettings|null);
            public max_pokemon_types: number;
            public sfida_settings?: (POGOProtos.Settings.ISfidaSettings|null);
            public news_settings?: (POGOProtos.Settings.INewsSettings|null);
            public translation_settings?: (POGOProtos.Settings.ITranslationSettings|null);
            public passcode_settings?: (POGOProtos.Settings.IPasscodeSettings|null);
            public notification_settings?: (POGOProtos.Settings.INotificationSettings|null);
            public client_app_blacklist: string[];
            public client_perf_settings?: (POGOProtos.Settings.IClientPerformanceSettings|null);
            public news_global_settings?: (POGOProtos.Settings.INewsGlobalSettings|null);
            public metrics_global_settings?: (POGOProtos.Settings.IMetricsGlobalSettings|null);
            public login_settings?: (POGOProtos.Settings.ILoginSettings|null);
            public quest_global_settings?: (POGOProtos.Settings.IQuestGlobalSettings|null);
            public static create(properties?: POGOProtos.Settings.IGlobalSettings): POGOProtos.Settings.GlobalSettings;
            public static encode(message: POGOProtos.Settings.IGlobalSettings, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: POGOProtos.Settings.IGlobalSettings, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.GlobalSettings;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Settings.GlobalSettings;
            public static fromObject(object: { [k: string]: any }): POGOProtos.Settings.GlobalSettings;
            public static toObject(message: POGOProtos.Settings.GlobalSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IGpsSettings {
            driving_warning_speed_meters_per_second?: (number|null);
            driving_warning_cooldown_minutes?: (number|null);
            driving_speed_sample_interval_seconds?: (number|null);
            driving_speed_sample_count?: (number|null);
        }

        class GpsSettings implements IGpsSettings {
            constructor(properties?: POGOProtos.Settings.IGpsSettings);
            public driving_warning_speed_meters_per_second: number;
            public driving_warning_cooldown_minutes: number;
            public driving_speed_sample_interval_seconds: number;
            public driving_speed_sample_count: number;
            public static create(properties?: POGOProtos.Settings.IGpsSettings): POGOProtos.Settings.GpsSettings;
            public static encode(message: POGOProtos.Settings.IGpsSettings, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: POGOProtos.Settings.IGpsSettings, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.GpsSettings;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Settings.GpsSettings;
            public static fromObject(object: { [k: string]: any }): POGOProtos.Settings.GpsSettings;
            public static toObject(message: POGOProtos.Settings.GpsSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IInventorySettings {
            max_pokemon?: (number|null);
            max_bag_items?: (number|null);
            base_pokemon?: (number|null);
            base_bag_items?: (number|null);
            base_eggs?: (number|null);
        }

        class InventorySettings implements IInventorySettings {
            constructor(properties?: POGOProtos.Settings.IInventorySettings);
            public max_pokemon: number;
            public max_bag_items: number;
            public base_pokemon: number;
            public base_bag_items: number;
            public base_eggs: number;
            public static create(properties?: POGOProtos.Settings.IInventorySettings): POGOProtos.Settings.InventorySettings;
            public static encode(message: POGOProtos.Settings.IInventorySettings, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: POGOProtos.Settings.IInventorySettings, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.InventorySettings;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Settings.InventorySettings;
            public static fromObject(object: { [k: string]: any }): POGOProtos.Settings.InventorySettings;
            public static toObject(message: POGOProtos.Settings.InventorySettings, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface ILevelSettings {
            trainer_cp_modifier?: (number|null);
            trainer_difficulty_modifier?: (number|null);
        }

        class LevelSettings implements ILevelSettings {
            constructor(properties?: POGOProtos.Settings.ILevelSettings);
            public trainer_cp_modifier: number;
            public trainer_difficulty_modifier: number;
            public static create(properties?: POGOProtos.Settings.ILevelSettings): POGOProtos.Settings.LevelSettings;
            public static encode(message: POGOProtos.Settings.ILevelSettings, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: POGOProtos.Settings.ILevelSettings, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.LevelSettings;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Settings.LevelSettings;
            public static fromObject(object: { [k: string]: any }): POGOProtos.Settings.LevelSettings;
            public static toObject(message: POGOProtos.Settings.LevelSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface ILoginSettings {
            enable_multi_login_linking?: (boolean|null);
        }

        class LoginSettings implements ILoginSettings {
            constructor(properties?: POGOProtos.Settings.ILoginSettings);
            public enable_multi_login_linking: boolean;
            public static create(properties?: POGOProtos.Settings.ILoginSettings): POGOProtos.Settings.LoginSettings;
            public static encode(message: POGOProtos.Settings.ILoginSettings, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: POGOProtos.Settings.ILoginSettings, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.LoginSettings;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Settings.LoginSettings;
            public static fromObject(object: { [k: string]: any }): POGOProtos.Settings.LoginSettings;
            public static toObject(message: POGOProtos.Settings.LoginSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IMapSettings {
            pokemon_visible_range?: (number|null);
            poke_nav_range_meters?: (number|null);
            encounter_range_meters?: (number|null);
            get_map_objects_min_refresh_seconds?: (number|null);
            get_map_objects_max_refresh_seconds?: (number|null);
            get_map_objects_min_distance_meters?: (number|null);
            google_maps_api_key?: (string|null);
            min_nearby_hide_sightings?: (number|null);
        }

        class MapSettings implements IMapSettings {
            constructor(properties?: POGOProtos.Settings.IMapSettings);
            public pokemon_visible_range: number;
            public poke_nav_range_meters: number;
            public encounter_range_meters: number;
            public get_map_objects_min_refresh_seconds: number;
            public get_map_objects_max_refresh_seconds: number;
            public get_map_objects_min_distance_meters: number;
            public google_maps_api_key: string;
            public min_nearby_hide_sightings: number;
            public static create(properties?: POGOProtos.Settings.IMapSettings): POGOProtos.Settings.MapSettings;
            public static encode(message: POGOProtos.Settings.IMapSettings, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: POGOProtos.Settings.IMapSettings, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.MapSettings;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Settings.MapSettings;
            public static fromObject(object: { [k: string]: any }): POGOProtos.Settings.MapSettings;
            public static toObject(message: POGOProtos.Settings.MapSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        namespace Master {

            interface IAvatarCustomizationSettings {
                enabled?: (boolean|null);
                avatar_type?: (POGOProtos.Data.Player.PlayerAvatarType|null);
                slot?: (POGOProtos.Enums.Slot[]|null);
                bundle_name?: (string|null);
                asset_name?: (string|null);
                group_name?: (string|null);
                sort_order?: (number|null);
                unlock_type?: (POGOProtos.Settings.Master.AvatarCustomizationSettings.AvatarCustomizationUnlockType|null);
                promo_type?: (POGOProtos.Settings.Master.AvatarCustomizationSettings.AvatarCustomizationPromoType[]|null);
                unlock_badge_type?: (POGOProtos.Enums.BadgeType|null);
                iap_sku?: (string|null);
                unlock_badge_level?: (number|null);
                icon_name?: (string|null);
                unlock_player_level?: (number|null);
            }

            class AvatarCustomizationSettings implements IAvatarCustomizationSettings {
                constructor(properties?: POGOProtos.Settings.Master.IAvatarCustomizationSettings);
                public enabled: boolean;
                public avatar_type: POGOProtos.Data.Player.PlayerAvatarType;
                public slot: POGOProtos.Enums.Slot[];
                public bundle_name: string;
                public asset_name: string;
                public group_name: string;
                public sort_order: number;
                public unlock_type: POGOProtos.Settings.Master.AvatarCustomizationSettings.AvatarCustomizationUnlockType;
                public promo_type: POGOProtos.Settings.Master.AvatarCustomizationSettings.AvatarCustomizationPromoType[];
                public unlock_badge_type: POGOProtos.Enums.BadgeType;
                public iap_sku: string;
                public unlock_badge_level: number;
                public icon_name: string;
                public unlock_player_level: number;
                public static create(properties?: POGOProtos.Settings.Master.IAvatarCustomizationSettings): POGOProtos.Settings.Master.AvatarCustomizationSettings;
                public static encode(message: POGOProtos.Settings.Master.IAvatarCustomizationSettings, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Settings.Master.IAvatarCustomizationSettings, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.AvatarCustomizationSettings;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Settings.Master.AvatarCustomizationSettings;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Settings.Master.AvatarCustomizationSettings;
                public static toObject(message: POGOProtos.Settings.Master.AvatarCustomizationSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace AvatarCustomizationSettings {

                enum AvatarCustomizationPromoType {
                    UNSET_PROMO_TYPE = 0,
                    SALE = 1,
                    FEATURED = 2
                }

                enum AvatarCustomizationUnlockType {
                    UNSET_UNLOCK_TYPE = 0,
                    DEFAULT = 1,
                    MEDAL_REWARD = 2,
                    IAP_CLOTHING = 3,
                    LEVEL_REWARD = 4
                }
            }

            interface IBadgeSettings {
                badge_type?: (POGOProtos.Enums.BadgeType|null);
                badge_rank?: (number|null);
                targets?: (number[]|null);
                capture_reward?: (POGOProtos.Data.Badge.IBadgeCaptureReward[]|null);
                event_badge?: (boolean|null);
            }

            class BadgeSettings implements IBadgeSettings {
                constructor(properties?: POGOProtos.Settings.Master.IBadgeSettings);
                public badge_type: POGOProtos.Enums.BadgeType;
                public badge_rank: number;
                public targets: number[];
                public capture_reward: POGOProtos.Data.Badge.IBadgeCaptureReward[];
                public event_badge: boolean;
                public static create(properties?: POGOProtos.Settings.Master.IBadgeSettings): POGOProtos.Settings.Master.BadgeSettings;
                public static encode(message: POGOProtos.Settings.Master.IBadgeSettings, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Settings.Master.IBadgeSettings, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.BadgeSettings;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Settings.Master.BadgeSettings;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Settings.Master.BadgeSettings;
                public static toObject(message: POGOProtos.Settings.Master.BadgeSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface ICameraSettings {
                next_camera?: (string|null);
                interpolation?: (POGOProtos.Enums.CameraInterpolation[]|null);
                target_type?: (POGOProtos.Enums.CameraTarget[]|null);
                ease_in_speed?: (number[]|null);
                ease_out_speed?: (number[]|null);
                duration_seconds?: (number[]|null);
                wait_seconds?: (number[]|null);
                transition_seconds?: (number[]|null);
                angle_degree?: (number[]|null);
                angle_offset_degree?: (number[]|null);
                pitch_degree?: (number[]|null);
                pitch_offset_degree?: (number[]|null);
                roll_degree?: (number[]|null);
                distance_meters?: (number[]|null);
                height_percent?: (number[]|null);
                vert_ctr_ratio?: (number[]|null);
            }

            class CameraSettings implements ICameraSettings {
                constructor(properties?: POGOProtos.Settings.Master.ICameraSettings);
                public next_camera: string;
                public interpolation: POGOProtos.Enums.CameraInterpolation[];
                public target_type: POGOProtos.Enums.CameraTarget[];
                public ease_in_speed: number[];
                public ease_out_speed: number[];
                public duration_seconds: number[];
                public wait_seconds: number[];
                public transition_seconds: number[];
                public angle_degree: number[];
                public angle_offset_degree: number[];
                public pitch_degree: number[];
                public pitch_offset_degree: number[];
                public roll_degree: number[];
                public distance_meters: number[];
                public height_percent: number[];
                public vert_ctr_ratio: number[];
                public static create(properties?: POGOProtos.Settings.Master.ICameraSettings): POGOProtos.Settings.Master.CameraSettings;
                public static encode(message: POGOProtos.Settings.Master.ICameraSettings, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Settings.Master.ICameraSettings, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.CameraSettings;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Settings.Master.CameraSettings;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Settings.Master.CameraSettings;
                public static toObject(message: POGOProtos.Settings.Master.CameraSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IEncounterSettings {
                spin_bonus_threshold?: (number|null);
                excellent_throw_threshold?: (number|null);
                great_throw_threshold?: (number|null);
                nice_throw_threshold?: (number|null);
                milestone_threshold?: (number|null);
                ar_plus_mode_enabled?: (boolean|null);
                ar_close_proximity_threshold?: (number|null);
                ar_low_awareness_threshold?: (number|null);
                ar_close_proximity_multiplier?: (number|null);
                ar_awareness_penalty_threshold?: (number|null);
                ar_low_awareness_max_multiplier?: (number|null);
                ar_high_awareness_min_penalty_multiplier?: (number|null);
                ar_plus_attempts_until_flee_max?: (number|null);
                ar_plus_attempts_until_flee_infinite?: (number|null);
                escaped_bonus_multiplier_max?: (number|null);
                escaped_bonus_multiplier_by_excellent_throw?: (number|null);
                escaped_bonus_multiplier_by_great_throw?: (number|null);
                escaped_bonus_multiplier_by_nice_throw?: (number|null);
            }

            class EncounterSettings implements IEncounterSettings {
                constructor(properties?: POGOProtos.Settings.Master.IEncounterSettings);
                public spin_bonus_threshold: number;
                public excellent_throw_threshold: number;
                public great_throw_threshold: number;
                public nice_throw_threshold: number;
                public milestone_threshold: number;
                public ar_plus_mode_enabled: boolean;
                public ar_close_proximity_threshold: number;
                public ar_low_awareness_threshold: number;
                public ar_close_proximity_multiplier: number;
                public ar_awareness_penalty_threshold: number;
                public ar_low_awareness_max_multiplier: number;
                public ar_high_awareness_min_penalty_multiplier: number;
                public ar_plus_attempts_until_flee_max: number;
                public ar_plus_attempts_until_flee_infinite: number;
                public escaped_bonus_multiplier_max: number;
                public escaped_bonus_multiplier_by_excellent_throw: number;
                public escaped_bonus_multiplier_by_great_throw: number;
                public escaped_bonus_multiplier_by_nice_throw: number;
                public static create(properties?: POGOProtos.Settings.Master.IEncounterSettings): POGOProtos.Settings.Master.EncounterSettings;
                public static encode(message: POGOProtos.Settings.Master.IEncounterSettings, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Settings.Master.IEncounterSettings, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.EncounterSettings;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Settings.Master.EncounterSettings;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Settings.Master.EncounterSettings;
                public static toObject(message: POGOProtos.Settings.Master.EncounterSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IEquippedBadgeSettings {
                equip_badge_cooldown_ms?: (number|Long|null);
                catch_probability_bonus?: (number[]|null);
                flee_probability_bonus?: (number[]|null);
            }

            class EquippedBadgeSettings implements IEquippedBadgeSettings {
                constructor(properties?: POGOProtos.Settings.Master.IEquippedBadgeSettings);
                public equip_badge_cooldown_ms: (number|Long);
                public catch_probability_bonus: number[];
                public flee_probability_bonus: number[];
                public static create(properties?: POGOProtos.Settings.Master.IEquippedBadgeSettings): POGOProtos.Settings.Master.EquippedBadgeSettings;
                public static encode(message: POGOProtos.Settings.Master.IEquippedBadgeSettings, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Settings.Master.IEquippedBadgeSettings, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.EquippedBadgeSettings;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Settings.Master.EquippedBadgeSettings;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Settings.Master.EquippedBadgeSettings;
                public static toObject(message: POGOProtos.Settings.Master.EquippedBadgeSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IFormSettings {
                pokemon?: (POGOProtos.Enums.PokemonId|null);
                forms?: (POGOProtos.Settings.Master.FormSettings.IForm[]|null);
            }

            class FormSettings implements IFormSettings {
                constructor(properties?: POGOProtos.Settings.Master.IFormSettings);
                public pokemon: POGOProtos.Enums.PokemonId;
                public forms: POGOProtos.Settings.Master.FormSettings.IForm[];
                public static create(properties?: POGOProtos.Settings.Master.IFormSettings): POGOProtos.Settings.Master.FormSettings;
                public static encode(message: POGOProtos.Settings.Master.IFormSettings, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Settings.Master.IFormSettings, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.FormSettings;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Settings.Master.FormSettings;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Settings.Master.FormSettings;
                public static toObject(message: POGOProtos.Settings.Master.FormSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace FormSettings {

                interface IForm {
                    form?: (POGOProtos.Enums.Form|null);
                    asset_bundle_value?: (number|null);
                }

                class Form implements IForm {
                    constructor(properties?: POGOProtos.Settings.Master.FormSettings.IForm);
                    public form: POGOProtos.Enums.Form;
                    public asset_bundle_value: number;
                    public static create(properties?: POGOProtos.Settings.Master.FormSettings.IForm): POGOProtos.Settings.Master.FormSettings.Form;
                    public static encode(message: POGOProtos.Settings.Master.FormSettings.IForm, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Settings.Master.FormSettings.IForm, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.FormSettings.Form;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Settings.Master.FormSettings.Form;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Settings.Master.FormSettings.Form;
                    public static toObject(message: POGOProtos.Settings.Master.FormSettings.Form, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }
            }

            interface IGenderSettings {
                pokemon?: (POGOProtos.Enums.PokemonId|null);
                gender?: (POGOProtos.Settings.Master.Pokemon.IPokemonGenderSettings|null);
            }

            class GenderSettings implements IGenderSettings {
                constructor(properties?: POGOProtos.Settings.Master.IGenderSettings);
                public pokemon: POGOProtos.Enums.PokemonId;
                public gender?: (POGOProtos.Settings.Master.Pokemon.IPokemonGenderSettings|null);
                public static create(properties?: POGOProtos.Settings.Master.IGenderSettings): POGOProtos.Settings.Master.GenderSettings;
                public static encode(message: POGOProtos.Settings.Master.IGenderSettings, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Settings.Master.IGenderSettings, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.GenderSettings;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Settings.Master.GenderSettings;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Settings.Master.GenderSettings;
                public static toObject(message: POGOProtos.Settings.Master.GenderSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IGymBadgeGmtSettings {
                target?: (number[]|null);
                battle_winning_score_per_defender_cp?: (number|null);
                gym_defending_score_per_minute?: (number|null);
                berry_feeding_score?: (number|null);
                pokemon_deploy_score?: (number|null);
                raid_battle_winning_score?: (number|null);
                lose_all_battles_score?: (number|null);
            }

            class GymBadgeGmtSettings implements IGymBadgeGmtSettings {
                constructor(properties?: POGOProtos.Settings.Master.IGymBadgeGmtSettings);
                public target: number[];
                public battle_winning_score_per_defender_cp: number;
                public gym_defending_score_per_minute: number;
                public berry_feeding_score: number;
                public pokemon_deploy_score: number;
                public raid_battle_winning_score: number;
                public lose_all_battles_score: number;
                public static create(properties?: POGOProtos.Settings.Master.IGymBadgeGmtSettings): POGOProtos.Settings.Master.GymBadgeGmtSettings;
                public static encode(message: POGOProtos.Settings.Master.IGymBadgeGmtSettings, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Settings.Master.IGymBadgeGmtSettings, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.GymBadgeGmtSettings;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Settings.Master.GymBadgeGmtSettings;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Settings.Master.GymBadgeGmtSettings;
                public static toObject(message: POGOProtos.Settings.Master.GymBadgeGmtSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IGymBattleSettings {
                energy_per_sec?: (number|null);
                dodge_energy_cost?: (number|null);
                retarget_seconds?: (number|null);
                enemy_attack_interval?: (number|null);
                attack_server_interval?: (number|null);
                round_duration_seconds?: (number|null);
                bonus_time_per_ally_seconds?: (number|null);
                maximum_attackers_per_battle?: (number|null);
                same_type_attack_bonus_multiplier?: (number|null);
                maximum_energy?: (number|null);
                energy_delta_per_health_lost?: (number|null);
                dodge_duration_ms?: (number|null);
                minimum_player_level?: (number|null);
                swap_duration_ms?: (number|null);
                dodge_damage_reduction_percent?: (number|null);
                minimum_raid_player_level?: (number|null);
            }

            class GymBattleSettings implements IGymBattleSettings {
                constructor(properties?: POGOProtos.Settings.Master.IGymBattleSettings);
                public energy_per_sec: number;
                public dodge_energy_cost: number;
                public retarget_seconds: number;
                public enemy_attack_interval: number;
                public attack_server_interval: number;
                public round_duration_seconds: number;
                public bonus_time_per_ally_seconds: number;
                public maximum_attackers_per_battle: number;
                public same_type_attack_bonus_multiplier: number;
                public maximum_energy: number;
                public energy_delta_per_health_lost: number;
                public dodge_duration_ms: number;
                public minimum_player_level: number;
                public swap_duration_ms: number;
                public dodge_damage_reduction_percent: number;
                public minimum_raid_player_level: number;
                public static create(properties?: POGOProtos.Settings.Master.IGymBattleSettings): POGOProtos.Settings.Master.GymBattleSettings;
                public static encode(message: POGOProtos.Settings.Master.IGymBattleSettings, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Settings.Master.IGymBattleSettings, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.GymBattleSettings;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Settings.Master.GymBattleSettings;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Settings.Master.GymBattleSettings;
                public static toObject(message: POGOProtos.Settings.Master.GymBattleSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IGymLevelSettings {
                required_experience?: (number[]|null);
                leader_slots?: (number[]|null);
                trainer_slots?: (number[]|null);
                search_roll_bonus?: (number[]|null);
            }

            class GymLevelSettings implements IGymLevelSettings {
                constructor(properties?: POGOProtos.Settings.Master.IGymLevelSettings);
                public required_experience: number[];
                public leader_slots: number[];
                public trainer_slots: number[];
                public search_roll_bonus: number[];
                public static create(properties?: POGOProtos.Settings.Master.IGymLevelSettings): POGOProtos.Settings.Master.GymLevelSettings;
                public static encode(message: POGOProtos.Settings.Master.IGymLevelSettings, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Settings.Master.IGymLevelSettings, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.GymLevelSettings;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Settings.Master.GymLevelSettings;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Settings.Master.GymLevelSettings;
                public static toObject(message: POGOProtos.Settings.Master.GymLevelSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IIapItemCategoryDisplay {
                category?: (POGOProtos.Enums.HoloIapItemCategory|null);
                name?: (string|null);
                hidden?: (boolean|null);
                sort_order?: (number|null);
                banner_enabled?: (boolean|null);
                banner_title?: (string|null);
                image_url?: (string|null);
                description?: (string|null);
            }

            class IapItemCategoryDisplay implements IIapItemCategoryDisplay {
                constructor(properties?: POGOProtos.Settings.Master.IIapItemCategoryDisplay);
                public category: POGOProtos.Enums.HoloIapItemCategory;
                public name: string;
                public hidden: boolean;
                public sort_order: number;
                public banner_enabled: boolean;
                public banner_title: string;
                public image_url: string;
                public description: string;
                public static create(properties?: POGOProtos.Settings.Master.IIapItemCategoryDisplay): POGOProtos.Settings.Master.IapItemCategoryDisplay;
                public static encode(message: POGOProtos.Settings.Master.IIapItemCategoryDisplay, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Settings.Master.IIapItemCategoryDisplay, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.IapItemCategoryDisplay;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Settings.Master.IapItemCategoryDisplay;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Settings.Master.IapItemCategoryDisplay;
                public static toObject(message: POGOProtos.Settings.Master.IapItemCategoryDisplay, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IIapItemDisplay {
                sku?: (string|null);
                category?: (POGOProtos.Enums.HoloIapItemCategory|null);
                sort_order?: (number|null);
                hidden?: (boolean|null);
                sale?: (boolean|null);
                sprite_id?: (string|null);
                title?: (string|null);
                description?: (string|null);
            }

            class IapItemDisplay implements IIapItemDisplay {
                constructor(properties?: POGOProtos.Settings.Master.IIapItemDisplay);
                public sku: string;
                public category: POGOProtos.Enums.HoloIapItemCategory;
                public sort_order: number;
                public hidden: boolean;
                public sale: boolean;
                public sprite_id: string;
                public title: string;
                public description: string;
                public static create(properties?: POGOProtos.Settings.Master.IIapItemDisplay): POGOProtos.Settings.Master.IapItemDisplay;
                public static encode(message: POGOProtos.Settings.Master.IIapItemDisplay, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Settings.Master.IIapItemDisplay, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.IapItemDisplay;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Settings.Master.IapItemDisplay;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Settings.Master.IapItemDisplay;
                public static toObject(message: POGOProtos.Settings.Master.IapItemDisplay, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IIapSettings {
                daily_bonus_coins?: (number|null);
                daily_defender_bonus_per_pokemon?: (number[]|null);
                daily_defender_bonus_max_defenders?: (number|null);
                daily_defender_bonus_currency?: (string[]|null);
                min_time_between_claims_ms?: (number|Long|null);
                daily_bonus_enabled?: (boolean|null);
                daily_defender_bonus_enabled?: (boolean|null);
            }

            class IapSettings implements IIapSettings {
                constructor(properties?: POGOProtos.Settings.Master.IIapSettings);
                public daily_bonus_coins: number;
                public daily_defender_bonus_per_pokemon: number[];
                public daily_defender_bonus_max_defenders: number;
                public daily_defender_bonus_currency: string[];
                public min_time_between_claims_ms: (number|Long);
                public daily_bonus_enabled: boolean;
                public daily_defender_bonus_enabled: boolean;
                public static create(properties?: POGOProtos.Settings.Master.IIapSettings): POGOProtos.Settings.Master.IapSettings;
                public static encode(message: POGOProtos.Settings.Master.IIapSettings, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Settings.Master.IIapSettings, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.IapSettings;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Settings.Master.IapSettings;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Settings.Master.IapSettings;
                public static toObject(message: POGOProtos.Settings.Master.IapSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace Item {

                interface IBattleAttributes {
                    sta_percent?: (number|null);
                    atk_percent?: (number|null);
                    def_percent?: (number|null);
                    duration_s?: (number|null);
                }

                class BattleAttributes implements IBattleAttributes {
                    constructor(properties?: POGOProtos.Settings.Master.Item.IBattleAttributes);
                    public sta_percent: number;
                    public atk_percent: number;
                    public def_percent: number;
                    public duration_s: number;
                    public static create(properties?: POGOProtos.Settings.Master.Item.IBattleAttributes): POGOProtos.Settings.Master.Item.BattleAttributes;
                    public static encode(message: POGOProtos.Settings.Master.Item.IBattleAttributes, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Settings.Master.Item.IBattleAttributes, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.Item.BattleAttributes;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Settings.Master.Item.BattleAttributes;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Settings.Master.Item.BattleAttributes;
                    public static toObject(message: POGOProtos.Settings.Master.Item.BattleAttributes, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IEggIncubatorAttributes {
                    incubator_type?: (POGOProtos.Inventory.EggIncubatorType|null);
                    uses?: (number|null);
                    distance_multiplier?: (number|null);
                }

                class EggIncubatorAttributes implements IEggIncubatorAttributes {
                    constructor(properties?: POGOProtos.Settings.Master.Item.IEggIncubatorAttributes);
                    public incubator_type: POGOProtos.Inventory.EggIncubatorType;
                    public uses: number;
                    public distance_multiplier: number;
                    public static create(properties?: POGOProtos.Settings.Master.Item.IEggIncubatorAttributes): POGOProtos.Settings.Master.Item.EggIncubatorAttributes;
                    public static encode(message: POGOProtos.Settings.Master.Item.IEggIncubatorAttributes, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Settings.Master.Item.IEggIncubatorAttributes, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.Item.EggIncubatorAttributes;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Settings.Master.Item.EggIncubatorAttributes;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Settings.Master.Item.EggIncubatorAttributes;
                    public static toObject(message: POGOProtos.Settings.Master.Item.EggIncubatorAttributes, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IExperienceBoostAttributes {
                    xp_multiplier?: (number|null);
                    boost_duration_ms?: (number|null);
                }

                class ExperienceBoostAttributes implements IExperienceBoostAttributes {
                    constructor(properties?: POGOProtos.Settings.Master.Item.IExperienceBoostAttributes);
                    public xp_multiplier: number;
                    public boost_duration_ms: number;
                    public static create(properties?: POGOProtos.Settings.Master.Item.IExperienceBoostAttributes): POGOProtos.Settings.Master.Item.ExperienceBoostAttributes;
                    public static encode(message: POGOProtos.Settings.Master.Item.IExperienceBoostAttributes, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Settings.Master.Item.IExperienceBoostAttributes, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.Item.ExperienceBoostAttributes;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Settings.Master.Item.ExperienceBoostAttributes;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Settings.Master.Item.ExperienceBoostAttributes;
                    public static toObject(message: POGOProtos.Settings.Master.Item.ExperienceBoostAttributes, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IFoodAttributes {
                    item_effect?: (POGOProtos.Enums.ItemEffect[]|null);
                    item_effect_percent?: (number[]|null);
                    growth_percent?: (number|null);
                    berry_multiplier?: (number|null);
                    remote_berry_multiplier?: (number|null);
                }

                class FoodAttributes implements IFoodAttributes {
                    constructor(properties?: POGOProtos.Settings.Master.Item.IFoodAttributes);
                    public item_effect: POGOProtos.Enums.ItemEffect[];
                    public item_effect_percent: number[];
                    public growth_percent: number;
                    public berry_multiplier: number;
                    public remote_berry_multiplier: number;
                    public static create(properties?: POGOProtos.Settings.Master.Item.IFoodAttributes): POGOProtos.Settings.Master.Item.FoodAttributes;
                    public static encode(message: POGOProtos.Settings.Master.Item.IFoodAttributes, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Settings.Master.Item.IFoodAttributes, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.Item.FoodAttributes;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Settings.Master.Item.FoodAttributes;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Settings.Master.Item.FoodAttributes;
                    public static toObject(message: POGOProtos.Settings.Master.Item.FoodAttributes, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IFortModifierAttributes {
                    modifier_lifetime_seconds?: (number|null);
                    troy_disk_num_pokemon_spawned?: (number|null);
                }

                class FortModifierAttributes implements IFortModifierAttributes {
                    constructor(properties?: POGOProtos.Settings.Master.Item.IFortModifierAttributes);
                    public modifier_lifetime_seconds: number;
                    public troy_disk_num_pokemon_spawned: number;
                    public static create(properties?: POGOProtos.Settings.Master.Item.IFortModifierAttributes): POGOProtos.Settings.Master.Item.FortModifierAttributes;
                    public static encode(message: POGOProtos.Settings.Master.Item.IFortModifierAttributes, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Settings.Master.Item.IFortModifierAttributes, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.Item.FortModifierAttributes;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Settings.Master.Item.FortModifierAttributes;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Settings.Master.Item.FortModifierAttributes;
                    public static toObject(message: POGOProtos.Settings.Master.Item.FortModifierAttributes, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IIncenseAttributes {
                    incense_lifetime_seconds?: (number|null);
                    pokemon_type?: (POGOProtos.Enums.PokemonType[]|null);
                    pokemon_incense_type_probability?: (number|null);
                    standing_time_between_encounters_seconds?: (number|null);
                    moving_time_between_encounter_seconds?: (number|null);
                    distance_required_for_shorter_interval_meters?: (number|null);
                    pokemon_attracted_length_sec?: (number|null);
                }

                class IncenseAttributes implements IIncenseAttributes {
                    constructor(properties?: POGOProtos.Settings.Master.Item.IIncenseAttributes);
                    public incense_lifetime_seconds: number;
                    public pokemon_type: POGOProtos.Enums.PokemonType[];
                    public pokemon_incense_type_probability: number;
                    public standing_time_between_encounters_seconds: number;
                    public moving_time_between_encounter_seconds: number;
                    public distance_required_for_shorter_interval_meters: number;
                    public pokemon_attracted_length_sec: number;
                    public static create(properties?: POGOProtos.Settings.Master.Item.IIncenseAttributes): POGOProtos.Settings.Master.Item.IncenseAttributes;
                    public static encode(message: POGOProtos.Settings.Master.Item.IIncenseAttributes, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Settings.Master.Item.IIncenseAttributes, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.Item.IncenseAttributes;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Settings.Master.Item.IncenseAttributes;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Settings.Master.Item.IncenseAttributes;
                    public static toObject(message: POGOProtos.Settings.Master.Item.IncenseAttributes, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IInventoryUpgradeAttributes {
                    additional_storage?: (number|null);
                    upgrade_type?: (POGOProtos.Inventory.InventoryUpgradeType|null);
                }

                class InventoryUpgradeAttributes implements IInventoryUpgradeAttributes {
                    constructor(properties?: POGOProtos.Settings.Master.Item.IInventoryUpgradeAttributes);
                    public additional_storage: number;
                    public upgrade_type: POGOProtos.Inventory.InventoryUpgradeType;
                    public static create(properties?: POGOProtos.Settings.Master.Item.IInventoryUpgradeAttributes): POGOProtos.Settings.Master.Item.InventoryUpgradeAttributes;
                    public static encode(message: POGOProtos.Settings.Master.Item.IInventoryUpgradeAttributes, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Settings.Master.Item.IInventoryUpgradeAttributes, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.Item.InventoryUpgradeAttributes;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Settings.Master.Item.InventoryUpgradeAttributes;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Settings.Master.Item.InventoryUpgradeAttributes;
                    public static toObject(message: POGOProtos.Settings.Master.Item.InventoryUpgradeAttributes, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IPokeballAttributes {
                    item_effect?: (POGOProtos.Enums.ItemEffect|null);
                    capture_multi?: (number|null);
                    capture_multi_effect?: (number|null);
                    item_effect_mod?: (number|null);
                }

                class PokeballAttributes implements IPokeballAttributes {
                    constructor(properties?: POGOProtos.Settings.Master.Item.IPokeballAttributes);
                    public item_effect: POGOProtos.Enums.ItemEffect;
                    public capture_multi: number;
                    public capture_multi_effect: number;
                    public item_effect_mod: number;
                    public static create(properties?: POGOProtos.Settings.Master.Item.IPokeballAttributes): POGOProtos.Settings.Master.Item.PokeballAttributes;
                    public static encode(message: POGOProtos.Settings.Master.Item.IPokeballAttributes, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Settings.Master.Item.IPokeballAttributes, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.Item.PokeballAttributes;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Settings.Master.Item.PokeballAttributes;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Settings.Master.Item.PokeballAttributes;
                    public static toObject(message: POGOProtos.Settings.Master.Item.PokeballAttributes, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IPotionAttributes {
                    sta_percent?: (number|null);
                    sta_amount?: (number|null);
                }

                class PotionAttributes implements IPotionAttributes {
                    constructor(properties?: POGOProtos.Settings.Master.Item.IPotionAttributes);
                    public sta_percent: number;
                    public sta_amount: number;
                    public static create(properties?: POGOProtos.Settings.Master.Item.IPotionAttributes): POGOProtos.Settings.Master.Item.PotionAttributes;
                    public static encode(message: POGOProtos.Settings.Master.Item.IPotionAttributes, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Settings.Master.Item.IPotionAttributes, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.Item.PotionAttributes;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Settings.Master.Item.PotionAttributes;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Settings.Master.Item.PotionAttributes;
                    public static toObject(message: POGOProtos.Settings.Master.Item.PotionAttributes, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IReviveAttributes {
                    sta_percent?: (number|null);
                }

                class ReviveAttributes implements IReviveAttributes {
                    constructor(properties?: POGOProtos.Settings.Master.Item.IReviveAttributes);
                    public sta_percent: number;
                    public static create(properties?: POGOProtos.Settings.Master.Item.IReviveAttributes): POGOProtos.Settings.Master.Item.ReviveAttributes;
                    public static encode(message: POGOProtos.Settings.Master.Item.IReviveAttributes, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Settings.Master.Item.IReviveAttributes, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.Item.ReviveAttributes;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Settings.Master.Item.ReviveAttributes;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Settings.Master.Item.ReviveAttributes;
                    public static toObject(message: POGOProtos.Settings.Master.Item.ReviveAttributes, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IStardustBoostAttributes {
                    stardust_multiplier?: (number|null);
                    boost_duration_ms?: (number|null);
                }

                class StardustBoostAttributes implements IStardustBoostAttributes {
                    constructor(properties?: POGOProtos.Settings.Master.Item.IStardustBoostAttributes);
                    public stardust_multiplier: number;
                    public boost_duration_ms: number;
                    public static create(properties?: POGOProtos.Settings.Master.Item.IStardustBoostAttributes): POGOProtos.Settings.Master.Item.StardustBoostAttributes;
                    public static encode(message: POGOProtos.Settings.Master.Item.IStardustBoostAttributes, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Settings.Master.Item.IStardustBoostAttributes, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.Item.StardustBoostAttributes;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Settings.Master.Item.StardustBoostAttributes;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Settings.Master.Item.StardustBoostAttributes;
                    public static toObject(message: POGOProtos.Settings.Master.Item.StardustBoostAttributes, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }
            }

            interface IItemSettings {
                item_id?: (POGOProtos.Inventory.Item.ItemId|null);
                item_type?: (POGOProtos.Inventory.Item.ItemType|null);
                category?: (POGOProtos.Enums.ItemCategory|null);
                drop_freq?: (number|null);
                drop_trainer_level?: (number|null);
                pokeball?: (POGOProtos.Settings.Master.Item.IPokeballAttributes|null);
                potion?: (POGOProtos.Settings.Master.Item.IPotionAttributes|null);
                revive?: (POGOProtos.Settings.Master.Item.IReviveAttributes|null);
                battle?: (POGOProtos.Settings.Master.Item.IBattleAttributes|null);
                food?: (POGOProtos.Settings.Master.Item.IFoodAttributes|null);
                inventory_upgrade?: (POGOProtos.Settings.Master.Item.IInventoryUpgradeAttributes|null);
                xp_boost?: (POGOProtos.Settings.Master.Item.IExperienceBoostAttributes|null);
                incense?: (POGOProtos.Settings.Master.Item.IIncenseAttributes|null);
                egg_incubator?: (POGOProtos.Settings.Master.Item.IEggIncubatorAttributes|null);
                fort_modifier?: (POGOProtos.Settings.Master.Item.IFortModifierAttributes|null);
                stardust_boost?: (POGOProtos.Settings.Master.Item.IStardustBoostAttributes|null);
            }

            class ItemSettings implements IItemSettings {
                constructor(properties?: POGOProtos.Settings.Master.IItemSettings);
                public item_id: POGOProtos.Inventory.Item.ItemId;
                public item_type: POGOProtos.Inventory.Item.ItemType;
                public category: POGOProtos.Enums.ItemCategory;
                public drop_freq: number;
                public drop_trainer_level: number;
                public pokeball?: (POGOProtos.Settings.Master.Item.IPokeballAttributes|null);
                public potion?: (POGOProtos.Settings.Master.Item.IPotionAttributes|null);
                public revive?: (POGOProtos.Settings.Master.Item.IReviveAttributes|null);
                public battle?: (POGOProtos.Settings.Master.Item.IBattleAttributes|null);
                public food?: (POGOProtos.Settings.Master.Item.IFoodAttributes|null);
                public inventory_upgrade?: (POGOProtos.Settings.Master.Item.IInventoryUpgradeAttributes|null);
                public xp_boost?: (POGOProtos.Settings.Master.Item.IExperienceBoostAttributes|null);
                public incense?: (POGOProtos.Settings.Master.Item.IIncenseAttributes|null);
                public egg_incubator?: (POGOProtos.Settings.Master.Item.IEggIncubatorAttributes|null);
                public fort_modifier?: (POGOProtos.Settings.Master.Item.IFortModifierAttributes|null);
                public stardust_boost?: (POGOProtos.Settings.Master.Item.IStardustBoostAttributes|null);
                public static create(properties?: POGOProtos.Settings.Master.IItemSettings): POGOProtos.Settings.Master.ItemSettings;
                public static encode(message: POGOProtos.Settings.Master.IItemSettings, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Settings.Master.IItemSettings, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.ItemSettings;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Settings.Master.ItemSettings;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Settings.Master.ItemSettings;
                public static toObject(message: POGOProtos.Settings.Master.ItemSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IMoveSequenceSettings {
                sequence?: (string[]|null);
            }

            class MoveSequenceSettings implements IMoveSequenceSettings {
                constructor(properties?: POGOProtos.Settings.Master.IMoveSequenceSettings);
                public sequence: string[];
                public static create(properties?: POGOProtos.Settings.Master.IMoveSequenceSettings): POGOProtos.Settings.Master.MoveSequenceSettings;
                public static encode(message: POGOProtos.Settings.Master.IMoveSequenceSettings, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Settings.Master.IMoveSequenceSettings, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.MoveSequenceSettings;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Settings.Master.MoveSequenceSettings;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Settings.Master.MoveSequenceSettings;
                public static toObject(message: POGOProtos.Settings.Master.MoveSequenceSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IMoveSettings {
                movement_id?: (POGOProtos.Enums.PokemonMove|null);
                animation_id?: (number|null);
                pokemon_type?: (POGOProtos.Enums.PokemonType|null);
                power?: (number|null);
                accuracy_chance?: (number|null);
                critical_chance?: (number|null);
                heal_scalar?: (number|null);
                stamina_loss_scalar?: (number|null);
                trainer_level_min?: (number|null);
                trainer_level_max?: (number|null);
                vfx_name?: (string|null);
                duration_ms?: (number|null);
                damage_window_start_ms?: (number|null);
                damage_window_end_ms?: (number|null);
                energy_delta?: (number|null);
            }

            class MoveSettings implements IMoveSettings {
                constructor(properties?: POGOProtos.Settings.Master.IMoveSettings);
                public movement_id: POGOProtos.Enums.PokemonMove;
                public animation_id: number;
                public pokemon_type: POGOProtos.Enums.PokemonType;
                public power: number;
                public accuracy_chance: number;
                public critical_chance: number;
                public heal_scalar: number;
                public stamina_loss_scalar: number;
                public trainer_level_min: number;
                public trainer_level_max: number;
                public vfx_name: string;
                public duration_ms: number;
                public damage_window_start_ms: number;
                public damage_window_end_ms: number;
                public energy_delta: number;
                public static create(properties?: POGOProtos.Settings.Master.IMoveSettings): POGOProtos.Settings.Master.MoveSettings;
                public static encode(message: POGOProtos.Settings.Master.IMoveSettings, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Settings.Master.IMoveSettings, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.MoveSettings;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Settings.Master.MoveSettings;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Settings.Master.MoveSettings;
                public static toObject(message: POGOProtos.Settings.Master.MoveSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IOnboardingSettings {
                skip_avatar_customization?: (boolean|null);
                disable_initial_ar_prompt?: (boolean|null);
            }

            class OnboardingSettings implements IOnboardingSettings {
                constructor(properties?: POGOProtos.Settings.Master.IOnboardingSettings);
                public skip_avatar_customization: boolean;
                public disable_initial_ar_prompt: boolean;
                public static create(properties?: POGOProtos.Settings.Master.IOnboardingSettings): POGOProtos.Settings.Master.OnboardingSettings;
                public static encode(message: POGOProtos.Settings.Master.IOnboardingSettings, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Settings.Master.IOnboardingSettings, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.OnboardingSettings;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Settings.Master.OnboardingSettings;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Settings.Master.OnboardingSettings;
                public static toObject(message: POGOProtos.Settings.Master.OnboardingSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IPlayerLevelSettings {
                rank_num?: (number[]|null);
                required_experience?: (number[]|null);
                cp_multiplier?: (number[]|null);
                max_egg_player_level?: (number|null);
                max_encounter_player_level?: (number|null);
                max_raid_encounter_player_level?: (number|null);
                max_quest_encounter_player_level?: (number|null);
            }

            class PlayerLevelSettings implements IPlayerLevelSettings {
                constructor(properties?: POGOProtos.Settings.Master.IPlayerLevelSettings);
                public rank_num: number[];
                public required_experience: number[];
                public cp_multiplier: number[];
                public max_egg_player_level: number;
                public max_encounter_player_level: number;
                public max_raid_encounter_player_level: number;
                public max_quest_encounter_player_level: number;
                public static create(properties?: POGOProtos.Settings.Master.IPlayerLevelSettings): POGOProtos.Settings.Master.PlayerLevelSettings;
                public static encode(message: POGOProtos.Settings.Master.IPlayerLevelSettings, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Settings.Master.IPlayerLevelSettings, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.PlayerLevelSettings;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Settings.Master.PlayerLevelSettings;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Settings.Master.PlayerLevelSettings;
                public static toObject(message: POGOProtos.Settings.Master.PlayerLevelSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace Pokemon {

                interface ICameraAttributes {
                    disk_radius_m?: (number|null);
                    cylinder_radius_m?: (number|null);
                    cylinder_height_m?: (number|null);
                    cylinder_ground_m?: (number|null);
                    shoulder_mode_scale?: (number|null);
                }

                class CameraAttributes implements ICameraAttributes {
                    constructor(properties?: POGOProtos.Settings.Master.Pokemon.ICameraAttributes);
                    public disk_radius_m: number;
                    public cylinder_radius_m: number;
                    public cylinder_height_m: number;
                    public cylinder_ground_m: number;
                    public shoulder_mode_scale: number;
                    public static create(properties?: POGOProtos.Settings.Master.Pokemon.ICameraAttributes): POGOProtos.Settings.Master.Pokemon.CameraAttributes;
                    public static encode(message: POGOProtos.Settings.Master.Pokemon.ICameraAttributes, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Settings.Master.Pokemon.ICameraAttributes, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.Pokemon.CameraAttributes;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Settings.Master.Pokemon.CameraAttributes;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Settings.Master.Pokemon.CameraAttributes;
                    public static toObject(message: POGOProtos.Settings.Master.Pokemon.CameraAttributes, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IEncounterAttributes {
                    base_capture_rate?: (number|null);
                    base_flee_rate?: (number|null);
                    collision_radius_m?: (number|null);
                    collision_height_m?: (number|null);
                    collision_head_radius_m?: (number|null);
                    movement_type?: (POGOProtos.Enums.PokemonMovementType|null);
                    movement_timer_s?: (number|null);
                    jump_time_s?: (number|null);
                    attack_timer_s?: (number|null);
                    bonus_candy_capture_reward?: (number|null);
                    bonus_stardust_capture_reward?: (number|null);
                    attack_probability?: (number|null);
                    dodge_probability?: (number|null);
                    dodge_duration_s?: (number|null);
                    dodge_distance?: (number|null);
                    camera_distance?: (number|null);
                    min_pokemon_action_frequency_s?: (number|null);
                    max_pokemon_action_frequency_s?: (number|null);
                }

                class EncounterAttributes implements IEncounterAttributes {
                    constructor(properties?: POGOProtos.Settings.Master.Pokemon.IEncounterAttributes);
                    public base_capture_rate: number;
                    public base_flee_rate: number;
                    public collision_radius_m: number;
                    public collision_height_m: number;
                    public collision_head_radius_m: number;
                    public movement_type: POGOProtos.Enums.PokemonMovementType;
                    public movement_timer_s: number;
                    public jump_time_s: number;
                    public attack_timer_s: number;
                    public bonus_candy_capture_reward: number;
                    public bonus_stardust_capture_reward: number;
                    public attack_probability: number;
                    public dodge_probability: number;
                    public dodge_duration_s: number;
                    public dodge_distance: number;
                    public camera_distance: number;
                    public min_pokemon_action_frequency_s: number;
                    public max_pokemon_action_frequency_s: number;
                    public static create(properties?: POGOProtos.Settings.Master.Pokemon.IEncounterAttributes): POGOProtos.Settings.Master.Pokemon.EncounterAttributes;
                    public static encode(message: POGOProtos.Settings.Master.Pokemon.IEncounterAttributes, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Settings.Master.Pokemon.IEncounterAttributes, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.Pokemon.EncounterAttributes;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Settings.Master.Pokemon.EncounterAttributes;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Settings.Master.Pokemon.EncounterAttributes;
                    public static toObject(message: POGOProtos.Settings.Master.Pokemon.EncounterAttributes, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IEvolutionBranch {
                    evolution?: (POGOProtos.Enums.PokemonId|null);
                    evolution_item_requirement?: (POGOProtos.Inventory.Item.ItemId|null);
                    candy_cost?: (number|null);
                    km_buddy_distance_requirement?: (number|null);
                }

                class EvolutionBranch implements IEvolutionBranch {
                    constructor(properties?: POGOProtos.Settings.Master.Pokemon.IEvolutionBranch);
                    public evolution: POGOProtos.Enums.PokemonId;
                    public evolution_item_requirement: POGOProtos.Inventory.Item.ItemId;
                    public candy_cost: number;
                    public km_buddy_distance_requirement: number;
                    public static create(properties?: POGOProtos.Settings.Master.Pokemon.IEvolutionBranch): POGOProtos.Settings.Master.Pokemon.EvolutionBranch;
                    public static encode(message: POGOProtos.Settings.Master.Pokemon.IEvolutionBranch, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Settings.Master.Pokemon.IEvolutionBranch, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.Pokemon.EvolutionBranch;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Settings.Master.Pokemon.EvolutionBranch;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Settings.Master.Pokemon.EvolutionBranch;
                    public static toObject(message: POGOProtos.Settings.Master.Pokemon.EvolutionBranch, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IPokemonGenderSettings {
                    male_percent?: (number|null);
                    female_percent?: (number|null);
                    genderless_percent?: (number|null);
                }

                class PokemonGenderSettings implements IPokemonGenderSettings {
                    constructor(properties?: POGOProtos.Settings.Master.Pokemon.IPokemonGenderSettings);
                    public male_percent: number;
                    public female_percent: number;
                    public genderless_percent: number;
                    public static create(properties?: POGOProtos.Settings.Master.Pokemon.IPokemonGenderSettings): POGOProtos.Settings.Master.Pokemon.PokemonGenderSettings;
                    public static encode(message: POGOProtos.Settings.Master.Pokemon.IPokemonGenderSettings, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Settings.Master.Pokemon.IPokemonGenderSettings, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.Pokemon.PokemonGenderSettings;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Settings.Master.Pokemon.PokemonGenderSettings;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Settings.Master.Pokemon.PokemonGenderSettings;
                    public static toObject(message: POGOProtos.Settings.Master.Pokemon.PokemonGenderSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }

                interface IStatsAttributes {
                    base_stamina?: (number|null);
                    base_attack?: (number|null);
                    base_defense?: (number|null);
                    dodge_energy_delta?: (number|null);
                }

                class StatsAttributes implements IStatsAttributes {
                    constructor(properties?: POGOProtos.Settings.Master.Pokemon.IStatsAttributes);
                    public base_stamina: number;
                    public base_attack: number;
                    public base_defense: number;
                    public dodge_energy_delta: number;
                    public static create(properties?: POGOProtos.Settings.Master.Pokemon.IStatsAttributes): POGOProtos.Settings.Master.Pokemon.StatsAttributes;
                    public static encode(message: POGOProtos.Settings.Master.Pokemon.IStatsAttributes, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Settings.Master.Pokemon.IStatsAttributes, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.Pokemon.StatsAttributes;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Settings.Master.Pokemon.StatsAttributes;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Settings.Master.Pokemon.StatsAttributes;
                    public static toObject(message: POGOProtos.Settings.Master.Pokemon.StatsAttributes, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }
            }

            interface IPokemonScaleSetting {
                pokemon_scale_mode?: (POGOProtos.Settings.Master.PokemonScaleSetting.PokemonScaleMode|null);
                min_height?: (number|null);
                max_height?: (number|null);
            }

            class PokemonScaleSetting implements IPokemonScaleSetting {
                constructor(properties?: POGOProtos.Settings.Master.IPokemonScaleSetting);
                public pokemon_scale_mode: POGOProtos.Settings.Master.PokemonScaleSetting.PokemonScaleMode;
                public min_height: number;
                public max_height: number;
                public static create(properties?: POGOProtos.Settings.Master.IPokemonScaleSetting): POGOProtos.Settings.Master.PokemonScaleSetting;
                public static encode(message: POGOProtos.Settings.Master.IPokemonScaleSetting, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Settings.Master.IPokemonScaleSetting, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.PokemonScaleSetting;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Settings.Master.PokemonScaleSetting;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Settings.Master.PokemonScaleSetting;
                public static toObject(message: POGOProtos.Settings.Master.PokemonScaleSetting, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace PokemonScaleSetting {

                enum PokemonScaleMode {
                    NaturalScale = 0,
                    GuiScale = 1,
                    BattlePokemonScale = 2,
                    RaidBossScale = 3,
                    GymTopperScale = 4,
                    MapPokemonScale = 5
                }
            }

            interface IPokemonSettings {
                pokemon_id?: (POGOProtos.Enums.PokemonId|null);
                model_scale?: (number|null);
                type?: (POGOProtos.Enums.PokemonType|null);
                type_2?: (POGOProtos.Enums.PokemonType|null);
                camera?: (POGOProtos.Settings.Master.Pokemon.ICameraAttributes|null);
                encounter?: (POGOProtos.Settings.Master.Pokemon.IEncounterAttributes|null);
                stats?: (POGOProtos.Settings.Master.Pokemon.IStatsAttributes|null);
                quick_moves?: (POGOProtos.Enums.PokemonMove[]|null);
                cinematic_moves?: (POGOProtos.Enums.PokemonMove[]|null);
                animation_time?: (number[]|null);
                evolution_ids?: (POGOProtos.Enums.PokemonId[]|null);
                evolution_pips?: (number|null);
                rarity?: (POGOProtos.Enums.PokemonRarity|null);
                pokedex_height_m?: (number|null);
                pokedex_weight_kg?: (number|null);
                parent_pokemon_id?: (POGOProtos.Enums.PokemonId|null);
                height_std_dev?: (number|null);
                weight_std_dev?: (number|null);
                km_distance_to_hatch?: (number|null);
                family_id?: (POGOProtos.Enums.PokemonFamilyId|null);
                candy_to_evolve?: (number|null);
                km_buddy_distance?: (number|null);
                buddy_size?: (POGOProtos.Settings.Master.PokemonSettings.BuddySize|null);
                model_height?: (number|null);
                evolution_branch?: (POGOProtos.Settings.Master.Pokemon.IEvolutionBranch[]|null);
                model_scale_v2?: (number|null);
                form?: (POGOProtos.Enums.Form|null);
                event_quick_move?: (POGOProtos.Enums.PokemonMove|null);
                event_cinematic_move?: (POGOProtos.Enums.PokemonMove|null);
                buddy_offset_male?: (number[]|null);
                buddy_offset_female?: (number[]|null);
                buddy_scale?: (number|null);
            }

            class PokemonSettings implements IPokemonSettings {
                constructor(properties?: POGOProtos.Settings.Master.IPokemonSettings);
                public pokemon_id: POGOProtos.Enums.PokemonId;
                public model_scale: number;
                public type: POGOProtos.Enums.PokemonType;
                public type_2: POGOProtos.Enums.PokemonType;
                public camera?: (POGOProtos.Settings.Master.Pokemon.ICameraAttributes|null);
                public encounter?: (POGOProtos.Settings.Master.Pokemon.IEncounterAttributes|null);
                public stats?: (POGOProtos.Settings.Master.Pokemon.IStatsAttributes|null);
                public quick_moves: POGOProtos.Enums.PokemonMove[];
                public cinematic_moves: POGOProtos.Enums.PokemonMove[];
                public animation_time: number[];
                public evolution_ids: POGOProtos.Enums.PokemonId[];
                public evolution_pips: number;
                public rarity: POGOProtos.Enums.PokemonRarity;
                public pokedex_height_m: number;
                public pokedex_weight_kg: number;
                public parent_pokemon_id: POGOProtos.Enums.PokemonId;
                public height_std_dev: number;
                public weight_std_dev: number;
                public km_distance_to_hatch: number;
                public family_id: POGOProtos.Enums.PokemonFamilyId;
                public candy_to_evolve: number;
                public km_buddy_distance: number;
                public buddy_size: POGOProtos.Settings.Master.PokemonSettings.BuddySize;
                public model_height: number;
                public evolution_branch: POGOProtos.Settings.Master.Pokemon.IEvolutionBranch[];
                public model_scale_v2: number;
                public form: POGOProtos.Enums.Form;
                public event_quick_move: POGOProtos.Enums.PokemonMove;
                public event_cinematic_move: POGOProtos.Enums.PokemonMove;
                public buddy_offset_male: number[];
                public buddy_offset_female: number[];
                public buddy_scale: number;
                public static create(properties?: POGOProtos.Settings.Master.IPokemonSettings): POGOProtos.Settings.Master.PokemonSettings;
                public static encode(message: POGOProtos.Settings.Master.IPokemonSettings, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Settings.Master.IPokemonSettings, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.PokemonSettings;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Settings.Master.PokemonSettings;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Settings.Master.PokemonSettings;
                public static toObject(message: POGOProtos.Settings.Master.PokemonSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace PokemonSettings {

                enum BuddySize {
                    BUDDY_MEDIUM = 0,
                    BUDDY_SHOULDER = 1,
                    BUDDY_BIG = 2,
                    BUDDY_FLYING = 3,
                    BUDDY_BABY = 4
                }
            }

            interface IPokemonUpgradeSettings {
                upgrades_per_level?: (number|null);
                allowed_levels_above_player?: (number|null);
                candy_cost?: (number[]|null);
                stardust_cost?: (number[]|null);
            }

            class PokemonUpgradeSettings implements IPokemonUpgradeSettings {
                constructor(properties?: POGOProtos.Settings.Master.IPokemonUpgradeSettings);
                public upgrades_per_level: number;
                public allowed_levels_above_player: number;
                public candy_cost: number[];
                public stardust_cost: number[];
                public static create(properties?: POGOProtos.Settings.Master.IPokemonUpgradeSettings): POGOProtos.Settings.Master.PokemonUpgradeSettings;
                public static encode(message: POGOProtos.Settings.Master.IPokemonUpgradeSettings, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Settings.Master.IPokemonUpgradeSettings, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.PokemonUpgradeSettings;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Settings.Master.PokemonUpgradeSettings;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Settings.Master.PokemonUpgradeSettings;
                public static toObject(message: POGOProtos.Settings.Master.PokemonUpgradeSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            namespace Quest {

                interface IDailyQuestSettings {
                    buckets_per_day?: (number|null);
                    streak_length?: (number|null);
                    bonus_multiplier?: (number|null);
                    streak_bonus_multiplier?: (number|null);
                }

                class DailyQuestSettings implements IDailyQuestSettings {
                    constructor(properties?: POGOProtos.Settings.Master.Quest.IDailyQuestSettings);
                    public buckets_per_day: number;
                    public streak_length: number;
                    public bonus_multiplier: number;
                    public streak_bonus_multiplier: number;
                    public static create(properties?: POGOProtos.Settings.Master.Quest.IDailyQuestSettings): POGOProtos.Settings.Master.Quest.DailyQuestSettings;
                    public static encode(message: POGOProtos.Settings.Master.Quest.IDailyQuestSettings, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static encodeDelimited(message: POGOProtos.Settings.Master.Quest.IDailyQuestSettings, writer?: $protobuf.Writer): $protobuf.Writer;
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.Quest.DailyQuestSettings;
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Settings.Master.Quest.DailyQuestSettings;
                    public static fromObject(object: { [k: string]: any }): POGOProtos.Settings.Master.Quest.DailyQuestSettings;
                    public static toObject(message: POGOProtos.Settings.Master.Quest.DailyQuestSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };
                    public toJSON(): { [k: string]: any };
                }
            }

            interface IQuestSettings {
                quest_type?: (POGOProtos.Enums.QuestType|null);
                daily_quest?: (POGOProtos.Settings.Master.Quest.IDailyQuestSettings|null);
            }

            class QuestSettings implements IQuestSettings {
                constructor(properties?: POGOProtos.Settings.Master.IQuestSettings);
                public quest_type: POGOProtos.Enums.QuestType;
                public daily_quest?: (POGOProtos.Settings.Master.Quest.IDailyQuestSettings|null);
                public static create(properties?: POGOProtos.Settings.Master.IQuestSettings): POGOProtos.Settings.Master.QuestSettings;
                public static encode(message: POGOProtos.Settings.Master.IQuestSettings, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Settings.Master.IQuestSettings, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.QuestSettings;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Settings.Master.QuestSettings;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Settings.Master.QuestSettings;
                public static toObject(message: POGOProtos.Settings.Master.QuestSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface ITypeEffectiveSettings {
                attack_scalar?: (number[]|null);
                attack_type?: (POGOProtos.Enums.PokemonType|null);
            }

            class TypeEffectiveSettings implements ITypeEffectiveSettings {
                constructor(properties?: POGOProtos.Settings.Master.ITypeEffectiveSettings);
                public attack_scalar: number[];
                public attack_type: POGOProtos.Enums.PokemonType;
                public static create(properties?: POGOProtos.Settings.Master.ITypeEffectiveSettings): POGOProtos.Settings.Master.TypeEffectiveSettings;
                public static encode(message: POGOProtos.Settings.Master.ITypeEffectiveSettings, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Settings.Master.ITypeEffectiveSettings, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.TypeEffectiveSettings;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Settings.Master.TypeEffectiveSettings;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Settings.Master.TypeEffectiveSettings;
                public static toObject(message: POGOProtos.Settings.Master.TypeEffectiveSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IWeatherAffinity {
                weather_condition?: (POGOProtos.Enums.WeatherCondition|null);
                pokemon_type?: (POGOProtos.Enums.PokemonType[]|null);
            }

            class WeatherAffinity implements IWeatherAffinity {
                constructor(properties?: POGOProtos.Settings.Master.IWeatherAffinity);
                public weather_condition: POGOProtos.Enums.WeatherCondition;
                public pokemon_type: POGOProtos.Enums.PokemonType[];
                public static create(properties?: POGOProtos.Settings.Master.IWeatherAffinity): POGOProtos.Settings.Master.WeatherAffinity;
                public static encode(message: POGOProtos.Settings.Master.IWeatherAffinity, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Settings.Master.IWeatherAffinity, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.WeatherAffinity;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Settings.Master.WeatherAffinity;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Settings.Master.WeatherAffinity;
                public static toObject(message: POGOProtos.Settings.Master.WeatherAffinity, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }

            interface IWeatherBonus {
                cp_base_level_bonus?: (number|null);
                guaranteed_individual_values?: (number|null);
                stardust_bonus_multiplier?: (number|null);
                attack_bonus_multiplier?: (number|null);
                raid_encounter_cp_base_level_bonus?: (number|null);
                raid_encounter_guaranteed_individual_values?: (number|null);
            }

            class WeatherBonus implements IWeatherBonus {
                constructor(properties?: POGOProtos.Settings.Master.IWeatherBonus);
                public cp_base_level_bonus: number;
                public guaranteed_individual_values: number;
                public stardust_bonus_multiplier: number;
                public attack_bonus_multiplier: number;
                public raid_encounter_cp_base_level_bonus: number;
                public raid_encounter_guaranteed_individual_values: number;
                public static create(properties?: POGOProtos.Settings.Master.IWeatherBonus): POGOProtos.Settings.Master.WeatherBonus;
                public static encode(message: POGOProtos.Settings.Master.IWeatherBonus, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Settings.Master.IWeatherBonus, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.Master.WeatherBonus;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Settings.Master.WeatherBonus;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Settings.Master.WeatherBonus;
                public static toObject(message: POGOProtos.Settings.Master.WeatherBonus, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }
        }

        interface IMetricsGlobalSettings {
            enabled?: (boolean|null);
        }

        class MetricsGlobalSettings implements IMetricsGlobalSettings {
            constructor(properties?: POGOProtos.Settings.IMetricsGlobalSettings);
            public enabled: boolean;
            public static create(properties?: POGOProtos.Settings.IMetricsGlobalSettings): POGOProtos.Settings.MetricsGlobalSettings;
            public static encode(message: POGOProtos.Settings.IMetricsGlobalSettings, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: POGOProtos.Settings.IMetricsGlobalSettings, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.MetricsGlobalSettings;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Settings.MetricsGlobalSettings;
            public static fromObject(object: { [k: string]: any }): POGOProtos.Settings.MetricsGlobalSettings;
            public static toObject(message: POGOProtos.Settings.MetricsGlobalSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface INewsGlobalSettings {
            enable_news?: (boolean|null);
        }

        class NewsGlobalSettings implements INewsGlobalSettings {
            constructor(properties?: POGOProtos.Settings.INewsGlobalSettings);
            public enable_news: boolean;
            public static create(properties?: POGOProtos.Settings.INewsGlobalSettings): POGOProtos.Settings.NewsGlobalSettings;
            public static encode(message: POGOProtos.Settings.INewsGlobalSettings, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: POGOProtos.Settings.INewsGlobalSettings, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.NewsGlobalSettings;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Settings.NewsGlobalSettings;
            public static fromObject(object: { [k: string]: any }): POGOProtos.Settings.NewsGlobalSettings;
            public static toObject(message: POGOProtos.Settings.NewsGlobalSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface INewsSettings {
            news?: (POGOProtos.Settings.NewsSettings.INews[]|null);
        }

        class NewsSettings implements INewsSettings {
            constructor(properties?: POGOProtos.Settings.INewsSettings);
            public news: POGOProtos.Settings.NewsSettings.INews[];
            public static create(properties?: POGOProtos.Settings.INewsSettings): POGOProtos.Settings.NewsSettings;
            public static encode(message: POGOProtos.Settings.INewsSettings, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: POGOProtos.Settings.INewsSettings, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.NewsSettings;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Settings.NewsSettings;
            public static fromObject(object: { [k: string]: any }): POGOProtos.Settings.NewsSettings;
            public static toObject(message: POGOProtos.Settings.NewsSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        namespace NewsSettings {

            interface INews {
                news_bundle_id?: (string|null);
                exclusive_countries?: (string[]|null);
            }

            class News implements INews {
                constructor(properties?: POGOProtos.Settings.NewsSettings.INews);
                public news_bundle_id: string;
                public exclusive_countries: string[];
                public static create(properties?: POGOProtos.Settings.NewsSettings.INews): POGOProtos.Settings.NewsSettings.News;
                public static encode(message: POGOProtos.Settings.NewsSettings.INews, writer?: $protobuf.Writer): $protobuf.Writer;
                public static encodeDelimited(message: POGOProtos.Settings.NewsSettings.INews, writer?: $protobuf.Writer): $protobuf.Writer;
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.NewsSettings.News;
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Settings.NewsSettings.News;
                public static fromObject(object: { [k: string]: any }): POGOProtos.Settings.NewsSettings.News;
                public static toObject(message: POGOProtos.Settings.NewsSettings.News, options?: $protobuf.IConversionOptions): { [k: string]: any };
                public toJSON(): { [k: string]: any };
            }
        }

        interface INotificationSettings {
            pull_notifications?: (boolean|null);
            show_notifications?: (boolean|null);
        }

        class NotificationSettings implements INotificationSettings {
            constructor(properties?: POGOProtos.Settings.INotificationSettings);
            public pull_notifications: boolean;
            public show_notifications: boolean;
            public static create(properties?: POGOProtos.Settings.INotificationSettings): POGOProtos.Settings.NotificationSettings;
            public static encode(message: POGOProtos.Settings.INotificationSettings, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: POGOProtos.Settings.INotificationSettings, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.NotificationSettings;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Settings.NotificationSettings;
            public static fromObject(object: { [k: string]: any }): POGOProtos.Settings.NotificationSettings;
            public static toObject(message: POGOProtos.Settings.NotificationSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IPasscodeSettings {
            show_passcode_in_store?: (boolean|null);
        }

        class PasscodeSettings implements IPasscodeSettings {
            constructor(properties?: POGOProtos.Settings.IPasscodeSettings);
            public show_passcode_in_store: boolean;
            public static create(properties?: POGOProtos.Settings.IPasscodeSettings): POGOProtos.Settings.PasscodeSettings;
            public static encode(message: POGOProtos.Settings.IPasscodeSettings, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: POGOProtos.Settings.IPasscodeSettings, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.PasscodeSettings;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Settings.PasscodeSettings;
            public static fromObject(object: { [k: string]: any }): POGOProtos.Settings.PasscodeSettings;
            public static toObject(message: POGOProtos.Settings.PasscodeSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IQuestGlobalSettings {
            enable_quests?: (boolean|null);
            max_challenge_quests?: (number|null);
        }

        class QuestGlobalSettings implements IQuestGlobalSettings {
            constructor(properties?: POGOProtos.Settings.IQuestGlobalSettings);
            public enable_quests: boolean;
            public max_challenge_quests: number;
            public static create(properties?: POGOProtos.Settings.IQuestGlobalSettings): POGOProtos.Settings.QuestGlobalSettings;
            public static encode(message: POGOProtos.Settings.IQuestGlobalSettings, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: POGOProtos.Settings.IQuestGlobalSettings, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.QuestGlobalSettings;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Settings.QuestGlobalSettings;
            public static fromObject(object: { [k: string]: any }): POGOProtos.Settings.QuestGlobalSettings;
            public static toObject(message: POGOProtos.Settings.QuestGlobalSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface ISfidaSettings {
            low_battery_threshold?: (number|null);
        }

        class SfidaSettings implements ISfidaSettings {
            constructor(properties?: POGOProtos.Settings.ISfidaSettings);
            public low_battery_threshold: number;
            public static create(properties?: POGOProtos.Settings.ISfidaSettings): POGOProtos.Settings.SfidaSettings;
            public static encode(message: POGOProtos.Settings.ISfidaSettings, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: POGOProtos.Settings.ISfidaSettings, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.SfidaSettings;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Settings.SfidaSettings;
            public static fromObject(object: { [k: string]: any }): POGOProtos.Settings.SfidaSettings;
            public static toObject(message: POGOProtos.Settings.SfidaSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface ITranslationSettings {
            translation_bundle_ids?: (string[]|null);
        }

        class TranslationSettings implements ITranslationSettings {
            constructor(properties?: POGOProtos.Settings.ITranslationSettings);
            public translation_bundle_ids: string[];
            public static create(properties?: POGOProtos.Settings.ITranslationSettings): POGOProtos.Settings.TranslationSettings;
            public static encode(message: POGOProtos.Settings.ITranslationSettings, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: POGOProtos.Settings.ITranslationSettings, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): POGOProtos.Settings.TranslationSettings;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): POGOProtos.Settings.TranslationSettings;
            public static fromObject(object: { [k: string]: any }): POGOProtos.Settings.TranslationSettings;
            public static toObject(message: POGOProtos.Settings.TranslationSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }
    }
}
