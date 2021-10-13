<template>
    <div class="filter">
        <label for="search">
            Search (
            <span
                data-label="set"
                @mouseover="highlightTableColumn"
                @mouseleave="highlightTableColumn"
                alt="Card Set"
            >set</span>,
            <span
                data-label="name"
                @mouseover="highlightTableColumn"
                @mouseleave="highlightTableColumn"
                alt="Card Name"
            >name</span>,
            <span
                data-label="rarity"
                @mouseover="highlightTableColumn"
                @mouseleave="highlightTableColumn"
                alt="Card Rarity"
            >rarity</span>) :
        </label>
        <input
            id="input-search"
            type="text"
            v-model="inputSearch"
            @change="search"
            placeholder="Type any set, name or rarity"
        />
    </div>
    <p v-if="error">{{ error }}</p>
    <p v-if="loading">Loading...</p>
    <div id="cards-table">
        <table v-if="!loading && !error">
            <thead>
                <tr>
                    <th class="th-year">Year</th>
                    <th class="th-set">Set</th>
                    <th>Language</th>
                    <th>ID</th>
                    <th class="th-name">Name</th>
                    <th>Rarity</th>
                    <th class="th-rarity">Quantity</th>
                    <th>Edition</th>
                    <th v-show="showPrice">Unique Price</th>
                    <th v-show="showPrice">Total Price</th>
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
                    <td v-show="showPrice">{{ card.cardmarket_price }} €</td>
                    <td
                        v-show="showPrice"
                    >{{ getTotalPriceByQuantity(card.quantity, card.cardmarket_price) }} €</td>
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
const showPrice = ref(false)
let {
    loading,
    error,
    STATIC_DATA: CARDS,
    data: cards,
    fetchData: fetchCards
} = useFetch(apiUrl.value);

onMounted(() => {
    fetchCards();
    window.addEventListener("keydown", e => {
        if (e.altKey && e.key === "p") {
            showPrice.value = !showPrice.value;
        }
    });
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

function highlightTableColumn(e) {
    let searchTarget = e.target.dataset.label
    let columnHead = document.querySelector(`.th-${searchTarget}`)
    if (e.type == "mouseover") {
        columnHead.classList.add('blink')
    } else {
        columnHead.classList.remove('blink')
    }
}

function getTotalPriceByQuantity(quantity, price) {
    return (quantity * price).toFixed(2) || 0;
}
</script>

<style>
#input-search {
    width: 10%;
}

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

.blink {
    animation: blink 0.5s linear infinite;
}
@keyframes blink {
    from {
        background-color: rgba(139, 0, 0, 0.8);
    }
    to {
        background-color: rgba(155, 6, 6, 0.8);
    }
}

span[data-label] {
    cursor: help;
}
</style>