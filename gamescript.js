      let player = {
        electron: 1,
        electronPC: 1
      }
      let upgrades = {
        electronPCC: 25
      }
      function Energy() {
        player.electron += player.electronPC;
        document.getElementById("energy").innerText = player.electron;
      }
      function tab1() {
        document.getElementById("tab1").style.display = "block"
        document.getElementById("tab2").style.display = "none"
        document.getElementById("tab3").style.display = "none"
      }
      function tab2() {
        document.getElementById("tab1").style.display = "none"
        document.getElementById("tab2").style.display = "block"
        document.getElementById("tab3").style.display = "none"
      }
      function tab3() {
        document.getElementById("tab1").style.display = "none"
        document.getElementById("tab2").style.display = "none"
        document.getElementById("tab3").style.display = "block"
      }
      function EnergyPCUpgrade() {
        if(player.electron > upgrades.electronPCC) {
        player.electronPC++;
        upgrades.electronPCC = upgrades.electronPCC * 2;
        player.electron = player.electron - upgrades.electronPCC;
        document.getElementById("energy").innerText = player.electron;
        }
        else {
        alert("You dont have enough Volts!");
      }
      }
tab1()
