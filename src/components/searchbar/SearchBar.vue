<script lang="ts" src="./SearchBar.ts" />
<template>
    <div class="searchbar-container">
        <input type="text"
        class="form-control"
        placeholder="Search Places..."
        v-model="searchTerm"
        >
        <SearchResults />   

    </div>
</template>


<style scoped>
    .searchbar-container{
        position:fixed;
        top: 90px;
        left: 30px;  
        background-color: #fff;
        z-index: 999;
        box-shadow: 0px 5px 10px rgba(0,0,0,0.2);
        width: 300px;
        border-radius: 10px !important;
        overflow: hidden;
        padding: 5px
    }
</style>