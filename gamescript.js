var player = {
        electron: 1,
        electronPC: 1
      }
      var upgrades = {
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
        upgrades.electronPCC = upgrades.electronPCC * 1.55
        }
      }
