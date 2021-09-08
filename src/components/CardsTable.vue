<template>
    <div class="filter">
        <label for="search">Search :</label>
        <input id="search" type="text" v-model="inputSearch" @change="search" />
    </div>
    <p v-if="error">{{ error }}</p>
    <p v-if="loading">Loading...</p>
    <div id="cards-table">
        <table v-if="!loading && !error">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Set</th>
                    <th>Language</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Rarity</th>
                    <th>Quantity</th>
                    <th>Edition</th>
                    <th>Unique Price</th>
                    <th>Total Price</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(card, index) in cards" :key="index">
                    <td>{{ card.year }}</td>
                    <td>{{ card.card_set }}</td>
                    <td>{{ card.language }}</td>
                    <td>{{ card.card_id }}</td>
                    <td>{{ card.card_name }}</td>
                    <td>{{ card.rarity }}</td>
                    <td>{{ card.quantity }}</td>
                    <td>{{ card.card_edition }}</td>
                    <td>{{ card.cardmarket_price }} €</td>
                    <td>{{ getTotalPriceByQuantity(card.quantity, card.cardmarket_price) }} €</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useFetch } from '../hooks/fetcher';

const apiUrl = ref("https://raw.githubusercontent.com/s0nnyhu/yugioh/develop/data.json");
const inputSearch = ref("")
let {
    loading,
    error,
    STATIC_DATA: CARDS,
    data: cards,
    fetchData: fetchCards
} = useFetch(apiUrl.value);

onMounted(() => {
    fetchCards();
    console.log("Hello there");
})

function search() {
    cards.value = CARDS.value;
    cards.value = cards.value.filter(function (str) {
        return (
            str.card_name.toLowerCase().includes(inputSearch.value.toLowerCase()) ||
            str.rarity.toLowerCase().includes(inputSearch.value.toLowerCase()) ||
            str.card_set.toLowerCase().includes(inputSearch.value.toLowerCase())
        );
    });

}

function getTotalPriceByQuantity(quantity, price) {
    return (quantity * price).toFixed(2) || 0;
}
</script>

<style>
#cards-table {
    margin: 1% 0 2% 0;
}
table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
}
td,
th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
}
</style>