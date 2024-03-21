<script setup>
</script>

<template>
  <div class = "grid grid-cols-3">
    <div>
        <h1 class="col-start-2">Matchs</h1>
    </div>
    <form>
        <div class="col-start-1 col-end-3s">
            <div>
                <input type="text" class="border-2 rounded-md">
            </div>
            <div>
                <input type="select" class="border-2 rounded-md">
            </div>
            <div>
                <input type="time" class="border-2 rounded-md">
            </div>
        </div>
    <div>
        <div class="flex flex-col" >
        <label for="myTeamScore">My team</label>
        <input id="myTeamScore"  class="border-2 rounded-md" type="number">
        </div>
        <div class="flex flex-col">
            <label for="opponentTeamScore">Team 2</label>
            <input id="opponentTeamScore" class="border-2 rounded-md" type="number">
        </div>
        
    </div>
    <div class="col-start-2">
        <button type="submit" class="p-2 mt-4 bg-blue-500 rounded-md">Create the Match</button>
    </div>
    </form>
  </div>
</template>