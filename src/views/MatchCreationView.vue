<script setup>
</script>

<template>
   <div class="flex flex-col items-center justify-center">
    <h1>Matchs</h1>
    <form class="flex flex-col ">
        <div class="space-y-6">
            <div>
                <input type="text" class="border-2 rounded-md text-center w-full">
            </div>
            <div>
                <select   class="border-2 rounded-md w-full text-center">
                </select>
            </div>
            <div>
                <input type="time" class="border-2 rounded-md w-full text-center">
            </div>
        <div class="flex space-x-28">
            <div class="flex flex-col">
                <label for="myTeamScore">My team</label>
                <input id="myTeamScore"  class="border-2 rounded-md size-16 text-center" type="number">
            </div>
            <div class="flex flex-col">
                <label for="opponentTeamScore">Team 2</label>
                <input id="opponentTeamScore" class="border-2 rounded-md size-16 text-center" type="number">
            </div>
        </div>
        <button type="submit" class="p-2 mt-4 bg-blue-500 rounded-md">Create the Match</button>
      </div>
    </form>
</div>
</template>