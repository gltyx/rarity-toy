function reset() {
    player = {
        totalRolls: 0,
        totalRarities: [1],
        totalRegenRarities: [1],
        lastTick: Date.now(),
        last10Rolls: [{
            rarity: "common",
            chance: 1 / 1,
            color: "#c4c4c4",
        }, ],
        bestRoll: {
            rarity: "common",
            chance: 1 / 1,
            color: "#c4c4c4",
            idx: 0,
        },
        luck: 1,
        rollTimer: 0,
        rollInterval: 3,
        shimmer: 1,
        shimmerMulti: 1,
        upgrades: {
            luck: {
                price: 10,
            },
            interval: {
                price: 10,
            },
            shimmer: {
                price: 25,
            },
        },
        totalRegens: 0,
        glisten: 1,
        regenLuck: 1,
        regenShimmerMulti: 1,
        regenRLuck: 1,
        regenGlistenMulti: 1,
        last10RegenRolls: [{
            rarity: "expected",
            chance: 1 / 1,
            color: "#e3e3e3",
            idx: 0,
        }, ],
        bestRegenRoll: {
            rarity: "expected",
            chance: 1 / 1,
            color: "#e3e3e3",
            idx: 0,
        },
        regenUpgrades: {
            luck: {
                price: 2,
            },
            shimmer: {
                price: 2,
            },
            regenLuck: {
                price: 5,
            },
            glisten: {
                price: 8,
            },
        },
        unlocked: [false]
    }
}

function loadIndex() {
    for (let i = 0; i < RARITIES.length; i++) {
        if (document.getElementById("index-rarity-" + i) != null) continue
        let element = document.createElement("div")
        element.id = "index-rarity-" + i
        element.classList.add("index-item")
        element.classList.add("table-row")
        document.getElementById("index-main-table").appendChild(element)

        let eltitle = document.createElement("div")
        eltitle.id = "index-rarity-title-" + i
        eltitle.classList.add("index-title")
        eltitle.textContent = "#" + i+1 + " - to be discovered..."
        eltitle.style.color = "#a4a4ac"
        document.getElementById(`index-rarity-${i}`).appendChild(eltitle)

        let elcount = document.createElement("div")
        elcount.id = "index-rarity-count-" + i
        elcount.classList.add("index-count")
        elcount.textContent = 0
        document.getElementById(`index-rarity-${i}`).appendChild(elcount)

    }

    for (let i = 0; i < REGENRARITIES.length; i++) {
        if (document.getElementById("index-regen-" + i) != null) continue
        let element = document.createElement("div")
        element.id = "index-regen-" + i
        element.classList.add("index-item")
        element.classList.add("table-row")
        document.getElementById("index-regen-table").appendChild(element)

        let eltitle = document.createElement("div")
        eltitle.id = "index-regen-title-" + i
        eltitle.classList.add("index-title")
        eltitle.textContent = "#" + i+1 + " - to be discovered..."
        eltitle.style.color = "#a4a4ac"
        document.getElementById(`index-regen-${i}`).appendChild(eltitle)

        let elcount = document.createElement("div")
        elcount.id = "index-regen-count-" + i
        elcount.classList.add("index-count")
        elcount.textContent = 0
        document.getElementById(`index-regen-${i}`).appendChild(elcount)

    }
}




const RARITIES = [{
        rarity: "common",
        chance: 1 / 1,
        color: "#c4c4c4",
    },
    {
        rarity: "uncommon",
        chance: 1 / 5,
        color: "#93ff80",
    },
    {
        rarity: "very uncommon",
        chance: 1 / 20,
        color: "#6aff19"
    },
    {
        rarity: "rare",
        chance: 1 / 75,
        color: "#82d9b3"
    },
    {
        rarity: "very rare",
        chance: 1 / 200,
        color: "#6be8d7"
    },
    {
        rarity: "super rare",
        chance: 1 / 650,
        color: "#08f3ff"
    },
    {
        rarity: "epic",
        chance: 1 / 2000,
        color: "#6d47bf"
    },
    {
        rarity: "very epic",
        chance: 1 / 8500,
        color: "#923af0"
    },
    {
        rarity: "super epic",
        chance: 1 / 30000,
        color: "#c300ff"
    },
    {
        rarity: "ultra epic",
        chance: 1 / 450000,
        color: "#ff00d9"
    },
    {
        rarity: "legendary",
        chance: 1 / 1000000,
        color: "#ff9c75"
    },
    {
        rarity: "very legendary",
        chance: 1 / 9250000,
        color: "#ffba42"
    },
    {
        rarity: "super legendary",
        chance: 1 / 40000000,
        color: "#ffe600"
    },
    {
        rarity: "ultra legendary",
        chance: 1 / 125000000,
        color: "#fff069"
    },
    {
        rarity: "legendary beyond comprehension",
        chance: 1 / 5e9,
        color: "#fff7cf"
    },
    {
        rarity: "mythical",
        chance: 1 / 4e10,
        color: "#ff6666"
    },
    {
        rarity: "very mythical",
        chance: 1 / 6.5e11,
        color: "#ff4242"
    },
    {
        rarity: "super mythical",
        chance: 1 / 9e12,
        color: "#ff2b2b"
    },
    {
        rarity: "ultra mythical",
        chance: 1 / 2.25e14,
        color: "#ff0000"
    },
    {
        rarity: "unheard-of...",
        chance: 1 / 6.66e16,
        color: "#961111"
    },
    {
        rarity: "darkness",
        chance: 1 / 1.8e18,
        color: "#454545"
    },
    {
        rarity: "absolute darkness",
        chance: 1 / 5e21,
        color: "#000000"
    },
    {
        rarity: "now i have nothing...",
        chance: 1 / 9.99e24,
        color: "#ffffff"
    },
    {
        rarity: "not even time...",
        chance: 1 / 7e28,
        color: "#6f00ff"
    },
    {
        rarity: "why did you do this?",
        chance: 1 / 3e35,
        color: "#8455c2"
    },
    {
        rarity: "you tore apart the fabric...",
        chance: 1 / 2.5e40,
        color: "#4f3f8a"
    },
    {
        rarity: "that holds everything together...",
        chance: 1 / 1.23e45,
        color: "#474a6e"
    },
    {
        rarity: "and i'll never forgive you.",
        chance: 1 / 1.3e51,
        color: "#4a615b"
    },
]

const REGENRARITIES = [{
        rarity: "expected",
        chance: 1 / 1,
        color: "#e3e3e3",
    },
    {
        rarity: "abnormal",
        chance: 1 / 10,
        color: "#b6d6d0",
    },
    {
        rarity: "anomalous",
        chance: 1 / 65,
        color: "#8ad8ed",
    },
    {
        rarity: "divergent",
        chance: 1 / 875,
        color: "#8572f2",
    },
    {
        rarity: "distorted",
        chance: 1 / 5150,
        color: "#8932e6",
    },
    {
        rarity: "aberrant",
        chance: 1 / 264785,
        color: "#b008c9",
    },
    {
        rarity: "paradoxical",
        chance: 1 / 777777777,
        color: "#960c61",
    },
]

setInterval(() => {

    let dt = (Date.now() - player.lastTick) / 1000;
    player.lastTick = Date.now();

    if (player.rollTimer > 0.1) {
        player.rollTimer -= 1 * dt;
    } else {
        player.rollTimer = 0
    }

}, 1000 / 30);

function roll() {
    if (player.rollTimer > 0) return
    player.totalRolls++
    player.rollTimer = player.rollInterval
    let x = Math.random() / player.luck / player.regenLuck
    for (let i = RARITIES.length - 1; i > -1; i--) {
        if (x <= RARITIES[i].chance) {
            if (player.last10Rolls[9] != null) player.last10Rolls[9].pop
            player.last10Rolls.unshift(RARITIES[i])
            if(player.totalRarities[i] == null) {
                player.totalRarities[i] = 1
            } else {
                player.totalRarities[i]++
            }
            player.shimmer += (i + 1) * player.shimmerMulti
            if (player.last10Rolls[0].chance < player.bestRoll.chance) {
                player.bestRoll = player.last10Rolls[0]
                player.bestRoll.idx = i
            }
            break
        }

    }
}

function upgradeLuck() {
    if (player.shimmer < player.upgrades.luck.price) return
    player.shimmer -= player.upgrades.luck.price
    player.upgrades.luck.price *= 3
    player.luck *= 2.5
}

function upgradeInterval() {
    if (player.shimmer < player.upgrades.interval.price) return
    player.shimmer -= player.upgrades.interval.price
    player.upgrades.interval.price = Math.floor(player.upgrades.interval.price * 2.25)
    player.rollInterval *= 0.85
}

function upgradeShimmer() {
    if (player.shimmer < player.upgrades.shimmer.price) return
    player.shimmer -= player.upgrades.shimmer.price
    player.upgrades.shimmer.price *= 4
    player.shimmerMulti *= 2
}

function rollRegen() {
    if (player.bestRoll.idx < 8) return
    
    player.totalRegens++
    player.luck = player.regenLuck
    player.shimmer = player.regenShimmerMulti
    player.upgrades = {
            luck: {
                price: 10,
            },
            interval: {
                price: 10,
            },
            shimmer: {
                price: 25,
            },
        },

        player.last10Rolls = [{
            rarity: "common",
            chance: 1 / 1,
            color: "#c4c4c4",
        }, null, null, null, null, null, null, null, null, null]
    player.rollInterval = 3
    player.rollTimer = 0
    player.shimmerMulti = player.regenShimmerMulti

    let x = Math.random() / player.regenRLuck / (1.3 ** (player.bestRoll.idx - 7))
    for (let i = REGENRARITIES.length - 1; i > -1; i--) {
        if (x <= REGENRARITIES[i].chance) {
            if (player.last10RegenRolls[9] != null) player.last10RegenRolls[9].pop
            player.last10RegenRolls.unshift(REGENRARITIES[i])
            if(player.totalRegenRarities[i] == null) {
                player.totalRegenRarities[i] = 1
            } else {
                player.totalRegenRarities[i]++
            }
            player.glisten += (i + 1) * player.regenGlistenMulti

            if (player.last10RegenRolls[0].chance < player.bestRegenRoll.chance) {
                player.bestRegenRoll = player.last10RegenRolls[0]
                player.bestRegenRoll.idx = i
            }
            player.bestRoll={
                rarity: "common",
                chance: 1 / 1,
                color: "#c4c4c4",
                idx: 0,
            }
            save()

            break
        }

    }
    player.bestRoll = {
        rarity: "common",
        chance: 1 / 1,
        color: "#c4c4c4",
        idx: 0,
    }
}

function upgradeRegenLuck() {
    if (player.glisten < player.regenUpgrades.luck.price) return
    player.glisten -= player.regenUpgrades.luck.price
    player.regenUpgrades.luck.price *= 4
    player.regenLuck *= 2
    player.luck *= 2
}

function upgradeRegenShimmer() {
    if (player.glisten < player.regenUpgrades.shimmer.price) return
    player.glisten -= player.regenUpgrades.shimmer.price
    player.regenUpgrades.shimmer.price *= 5
    player.regenShimmerMulti *= 1.5
    player.shimmerMulti *= 1.5
}

function upgradeRegenRLuck() {
    if (player.glisten < player.regenUpgrades.regenLuck.price) return
    player.glisten -= player.regenUpgrades.regenLuck.price
    player.regenUpgrades.regenLuck.price *= 4
    player.regenRLuck *= 2.5
}

function upgradeRegenGlisten() {
    if (player.glisten < player.regenUpgrades.glisten.price) return
    player.glisten -= player.regenUpgrades.glisten.price
    player.regenUpgrades.glisten.price *= 4
    player.regenGlistenMulti *= 1.5
}

setInterval(function () { // auto save
    updateGUI();
    checkUnlocks();
}, 1000 / 30);

function checkUnlocks() {
    if (player.bestRoll.idx >= 8) {
        player.unlocked[0] = true
    }
}

function updateGUI() {
    for (let i=0;i<RARITIES.length;i++){
        if(player.totalRarities[i]==0||player.totalRarities[i]==null){
            document.getElementById(`index-rarity-title-${i}`).textContent = `#` + (i+1) + " - to be discovered..."
            document.getElementById(`index-rarity-title-${i}`).style.color = "#a4a4ac"

        } else {
            document.getElementById(`index-rarity-title-${i}`).textContent = `#` + (i+1) + " - " + RARITIES[i].rarity + " - 1 in " + format(1 / RARITIES[i].chance)
            document.getElementById(`index-rarity-title-${i}`).style.color = RARITIES[i].color
            document.getElementById(`index-rarity-count-${i}`).textContent = format(player.totalRarities[i])

        }
    }

    for (let i=0;i<REGENRARITIES.length;i++){
        if(player.totalRegenRarities[i]==0||player.totalRegenRarities[i]==null){
            document.getElementById(`index-regen-title-${i}`).textContent = `#` + (i+1) + " - to be discovered..."
            document.getElementById(`index-regen-title-${i}`).style.color = "#a4a4ac"

        } else {
            document.getElementById(`index-regen-title-${i}`).textContent = `#` + (i+1) + " - " + REGENRARITIES[i].rarity + " - 1 in " + format(1 / REGENRARITIES[i].chance)
            document.getElementById(`index-regen-title-${i}`).style.color = REGENRARITIES[i].color
            document.getElementById(`index-regen-count-${i}`).textContent = format(player.totalRegenRarities[i])

        }
    }

    document.getElementById("latest-roll-chance").textContent = "rolled 1 in " + format(1 / player.last10Rolls[0].chance)
    document.getElementById("latest-roll-rarity").textContent = player.last10Rolls[0].rarity
    document.getElementById("latest-roll-rarity").style.color = player.last10Rolls[0].color
    if (player.rollTimer > 0) {
        document.getElementById("roll-rarity").textContent = "roll (" + tormat(player.rollTimer) + ")"
    } else {
        document.getElementById("roll-rarity").textContent = "roll (ready)"
    }

    document.getElementById("shimmer").textContent = format(Math.floor(player.shimmer)) + " shimmer"


    for (let i = 0; i < 10; i++) {
        if (!player.last10Rolls[i]) {
            document.getElementById(`roll-${i}`).textContent = "none"
            document.getElementById(`roll-${i}`).style.color = "white"
        } else {
            document.getElementById(`roll-${i}`).textContent = "1 in " + format(1 / player.last10Rolls[i].chance) + " - " + player.last10Rolls[i].rarity
            document.getElementById(`roll-${i}`).style.color = player.last10Rolls[i].color
            document.getElementById("best-roll").textContent = "1 in " + format(1 / player.bestRoll.chance) + " - " + player.bestRoll.rarity
            document.getElementById("best-roll").style.color = player.bestRoll.color
        }

    }

    document.getElementById("upgrade-luck").innerHTML = "<b>luck</b><br>" + sormat(player.luck) + "x -> " + sormat(player.luck * 2.5) + "x<br>" + format(player.upgrades.luck.price) + " shimmer"
    document.getElementById("upgrade-interval").innerHTML = "<b>interval</b><br>" + sormat(player.rollInterval) + "s -> " + sormat(player.rollInterval * 0.85) + "s<br>" + format(player.upgrades.interval.price) + " shimmer"
    document.getElementById("upgrade-shimmer").innerHTML = "<b>shimmer</b><br>" + sormat(player.shimmerMulti) + "x -> " + sormat(player.shimmerMulti * 2) + "x<br>" + format(player.upgrades.shimmer.price) + " shimmer"

    if (player.unlocked[0]) {
        document.getElementById("glisten").classList.remove("hidden")
        document.getElementById("regen-last-roll-item").classList.remove("hidden")
        document.getElementById("regeneration-menu-button").classList.remove("hidden")
        document.getElementById("regeneration-index-button").classList.remove("hidden")

    }

    document.getElementById("latest-regen-roll-chance").textContent = "regenerated 1 in " + format(1 / player.last10RegenRolls[0].chance)
    document.getElementById("latest-regen-roll-rarity").textContent = player.last10RegenRolls[0].rarity
    document.getElementById("latest-regen-roll-rarity").style.color = player.last10RegenRolls[0].color

    if (player.bestRoll.idx < 8) {
        document.getElementById("roll-regen-rarity").textContent = "regenerate (req. super epic)"
    } else {
        document.getElementById("roll-regen-rarity").textContent = "regenerate (" + sormat((1.3 ** (player.bestRoll.idx - 8)) * player.regenRLuck) + "x luck)"
    }

    document.getElementById("glisten").textContent = format(Math.floor(player.glisten)) + " glisten"

    for (let i = 0; i < 10; i++) {
        if (!player.last10RegenRolls[i]) {
            document.getElementById(`regen-roll-${i}`).textContent = "none"
            document.getElementById(`regen-roll-${i}`).style.color = "white"
        } else {
            document.getElementById(`regen-roll-${i}`).textContent = "1 in " + format(1 / player.last10RegenRolls[i].chance) + " - " + player.last10RegenRolls[i].rarity
            document.getElementById(`regen-roll-${i}`).style.color = player.last10RegenRolls[i].color
            document.getElementById("best-regen-roll").textContent = "1 in " + format(1 / player.bestRegenRoll.chance) + " - " + player.bestRegenRoll.rarity
            document.getElementById("best-regen-roll").style.color = player.bestRegenRoll.color
        }
    }

    document.getElementById("upgrade-regen-luck").innerHTML = "<b>luck</b><br>" + sormat(player.regenLuck) + "x -> " + sormat(player.regenLuck * 2) + "x<br>" + format(player.regenUpgrades.luck.price) + " glisten"
    document.getElementById("upgrade-regen-shimmer").innerHTML = "<b>shimmer</b><br>" + sormat(player.regenShimmerMulti) + "x -> " + sormat(player.regenShimmerMulti * 1.5) + "x<br>" + format(player.regenUpgrades.shimmer.price) + " glisten"
    document.getElementById("upgrade-regen-rluck").innerHTML = "<b>regen. luck</b><br>" + sormat(player.regenRLuck) + "x -> " + sormat(player.regenRLuck * 2.5) + "x<br>" + format(player.regenUpgrades.regenLuck.price) + " glisten"
    document.getElementById("upgrade-regen-glisten").innerHTML = "<b>glisten</b><br>" + sormat(player.regenGlistenMulti) + "x -> " + sormat(player.regenGlistenMulti * 1.5) + "x<br>" + format(player.regenUpgrades.glisten.price) + " glisten"

    
}

setInterval(function () { // auto save
    save();
}, 10000);

var saveItemName = "raritySave";

function save() {
    localStorage.setItem(saveItemName, btoa(JSON.stringify(player)));
}

function load() {
    reset()
    var loadedSave = localStorage.getItem(saveItemName);
    if (loadedSave === null) return;
    decoded = JSON.parse(atob(loadedSave));
    for (let item in decoded) player[item] = decoded[item]
}

function importSave() {
    let importedSave = prompt("Paste your save below.")
    if (importedSave && importedSave != null && importedSave != "") {
        localStorage.setItem(saveItemName, importedSave);
        location.reload()
    } else {
        alert("Not a valid save.")
    }
}

function hardReset() {
    if (confirm("Are you SURE you want to COMPLETELY RESET your save?")) {
        reset()
        save()
        location.reload()
    }
}

function exportSave() {
    save()
    navigator.clipboard.writeText(btoa(JSON.stringify(player))).then(function () {
        alert("Save exported to clipboard successfully.")
    }, function () {
        alert("Error exporting to clipboard.")
    });
}
