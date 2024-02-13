<script lang="ts" src="./SearchResults.vue" />
<template>
    <div>
        <ul class="list-group mt-3">
            <li class="list-group-item list-group-item-action">
                <h5>Nommbre del lugar</h5>
                <p>Pequeña descripcion del lugar a monstrar en la APP</p>
                <div align="right">
                    <button class="btn btn-outline-primary">
                        Direcciones
                    </button>
                </div>
            </li> 

            <li class="list-group-item list-group-item-action">
                <h5>Nommbre del lugar</h5>
                <p>Pequeña descripcion del lugar a monstrar en la APP</p>
                <div align="right">
                    <button class="btn btn-outline-primary">
                        Direcciones
                    </button>
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped>
    li{
        cursor: pointer;
    }
    h5{
        font-size: 15px;
    }
    p{
        font-size: 10px;
    }    
</style>