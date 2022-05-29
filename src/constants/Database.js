export const DatabaseCode = `public readonly struct AOCharacterInfo
{
    public readonly uint CharacterId;
    public readonly string CharacterName;
    public readonly GameMasterRank? GameMasterRank;

    public AOCharacterInfo(uint charId, string charName, GameMasterRank? gmRank = null)
    {
        CharacterId = charId;
        CharacterName = charName;
        GameMasterRank = gmRank;
    }
}

public static async Task<Dictionary<uint, AOCharacterInfo>> GetCharacters(uint accountId)
{
    var query = DatabaseManager.BeginQuery();
    try
    {
        return (await query.From("characters AS c")
                .WhereRaw("[account_id] = ?", accountId)
                .LeftJoin("game_masters AS gm", "c.id", "gm.character_id")
                .Select("c.id AS CharacterId", "c.username AS CharacterName", "gm.rank AS GameMasterRank")
                .GetAsync<AOCharacterInfo>())
            .ToDictionary(c => c.CharacterId);
    }
    catch (Exception ex)
    {
        log.Error("Error fetching characters of account: {0} from database. {1}\\n{2}", accountId, ex.Message, ex.StackTrace);
        DatabaseManager.DatabaseActive = false; 
        return null;
    }
}
`;