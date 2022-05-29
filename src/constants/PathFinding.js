export const PathFindingCode = `public static (Tile[], bool) FindPath(PathRequest request)
{
    // Initialize an empty array and a boolean indicating whether a path was found
    var waypoints = Array.Empty<Tile>();
    bool success = false;
    
    // The set of nodes to be evaluated
    // The Heap class is a binary tree implementation which sorts the nodes based on their F costs
    var openSet = new Heap<Tile>();
    // The set of nodes already evaluated
    var closedSet = new HashSet<Tile>();
    
    // Add the beginning node to the open set
    openSet.Add(request.PathStart);
    
    // Loop while there's nodes to be evaluated
    while (openSet.Count > 0)
    {   
        // Remove first will return the node with the lowest F cost
        Tile currentTile = openSet.RemoveFirst();
        closedSet.Add(currentTile);
             
        // If the current node we are at is the target node a path has been found, exit the loop
        if (currentTile == request.PathEnd)
        {
            success = true;
            break;
        }
        
        // Iterate over all the nodes surrounding the node we are currently examining
        foreach (Tile neighbour in currentTile.Neighbours)
        {
            // If the neighbour doesn't exist, or it has already been examined, or it is not traversable
            // Continue to the next neighbour
            if (neighbour is null || closedSet.Contains(neighbour) || !request.Options.IsValidTile(neighbour))
                continue;
            
            // Calculate the cost of moving to this neighbour node using the Manhattan distance formula
            int newMovementCostToNeighbour = currentTile.GCost + GetDistance(currentTile, neighbour);
            
            // If the path to this neighbour is longer, and it's already on the open set, continue to the next
            if (newMovementCostToNeighbour >= neighbour.GCost && openSet.Contains(neighbour)) 
                continue;
            
            // If the path is shorter set the new F cost (which is automatically set by setting the G and H costs)
            // And also set the parent of the neighbour to be able to retrace the path later on
            neighbour.GCost = newMovementCostToNeighbour;
            neighbour.HCost = GetDistance(neighbour, request.PathEnd);
            neighbour.Parent = currentTile;
            
            // Finally either add the neighbour to the tree, or update the tree
            if (!openSet.Contains(neighbour))
                openSet.Add(neighbour);
            else
                openSet.UpdateItem(neighbour);
        }
    }
    
    // If a path was found walk back from the end to the start
    if (success)
        waypoints = RetracePath(request.PathStart, request.PathEnd);

    return (waypoints, success);
}

private static Tile[] RetracePath(Tile startTile, Tile targetTile)
{
    var path = new List<Tile>();
    Tile currentTile = targetTile;
    
    // Make a list with all the nodes starting from the end
    // Going back to the beginning through each node that was parented
    while (currentTile != startTile)
    {
        path.Add(currentTile);
        var lastTile = currentTile;
        currentTile = lastTile.Parent;
    }
    
    // Reverse the list and return it
    path.Reverse();
    return path.ToArray();
}

private static int GetDistance(Tile tileA, Tile tileB)
{
    // Manhattan distance formula
    return (int)Math.Abs(tileA.Position.x - tileB.Position.x) + (int)Math.Abs(tileA.Position.y - tileB.Position.y);
}
`