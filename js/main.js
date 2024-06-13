document.addEventListener('DOMContentLoaded', function() {
    // document.getElementById ("eatHisFish").addEventListener ("click", () => {
    //     Swal.fire({
    //         title: `Wanna get rich selling Steve Madden's shoes?`,
    //         imageUrl: 'https://www.neverfuckingleaving.com/media/images/donnie.png',
    //         imageWidth: 100,
    //         html: `
    //             <ul style='text-align: left;'>
    //                 <li>
    //                     • Gobble as many fish as you can while taking occasional ludes.
    //                 </li>
    //                 <br />
    //                 <li>
    //                     • 2 game modes - free mode and paid mode. You can save your high score in paid mode (0.03 SOL), and the <strong>five top</strong> scorers get 30%, 20%, 15%, 10% and 5% of the total fee pool every 120 hours (5 days) in $PELF starting March 19 at 00:00 UTC (March 18 at 20:00 EST). Scoreboard resets every 120-hour game cycle to give everyone a chance to win.
    //                 </li>
    //                 <br />
    //                 <li>
    //                     • For the first 3 runs, team will start off the pool with 1.25 SOL worth of $PELF.
    //                 </li>
    //             </ul>
    //             <br />
    //             <p style='text-align: left';>
    //                 To be eligible for the prize, you must hold at least 50,000 $PELF.
    //             </p>
    //         `,
    //         confirmButtonText: 'PLAY'
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             // User clicked the "PLAY" button
    //             window.location.href = 'https://fish.neverfuckingleaving.com';
    //         }
    //     });
    // });

    const cryptoApiUrl = 'https://www.neverfuckingleaving.com/api/prices';

    fetch (cryptoApiUrl)
        .then (response => response.json ())
        .then (data => {
                console.log (data);
                const bitcoinPrice = new Intl.NumberFormat('en-US', { style: 'decimal' }).format(data.bitcoin.usd);
                document.querySelectorAll('.btcPrice').forEach(el => el.innerHTML = bitcoinPrice);
    
                const ethereumPrice = new Intl.NumberFormat('en-US', {
                    style: 'decimal',
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }).format(data.ethereum.usd);
    
                document.querySelectorAll('.ethPrice').forEach(el => el.innerHTML = ethereumPrice);
    
                const solanaPrice = new Intl.NumberFormat('en-US', {
                    style: 'decimal',
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }).format(data.solana.usd);
                
                document.querySelectorAll('.solPrice').forEach(el => el.innerHTML = solanaPrice);
    
                const dogePrice = new Intl.NumberFormat('en-US', { style: 'decimal' }).format(data.dogecoin.usd);
                document.querySelectorAll('.dogePrice').forEach(el => el.innerHTML = dogePrice);
    
                // const bonkPrice = new Intl.NumberFormat('en-US', { style: 'decimal' }).format(data.bonk.usd);
                document.querySelectorAll('.bonkPrice').forEach(el => el.innerHTML = data.bonk.usd);
    
                document.querySelectorAll('.pepePrice').forEach(el => el.innerHTML = data.pepe.usd);

                document.querySelectorAll('.wifPrice').forEach(el => el.innerHTML = data.wif);

                document.querySelectorAll('.pelfPrice').forEach(el => el.innerHTML = data.pelf);
        })
        .catch(error => console.error('Error fetching prices:', error));

    document.getElementById('buyButton').addEventListener('click', function() {
        var logoContainer = document.getElementById('logoContainer');

        if (logoContainer.style.opacity == 0) {
            // alert ('asdfas');
            logoContainer.style.opacity = 1;
            logoContainer.style.visibility = "visible";
            logoContainer.style.transform = "translateY(0)";
            
        }
    });

    // faq starts
    const items = document.querySelectorAll(".accordion button");

    function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');
    
    for (i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
    }
    
    if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
    }

    items.forEach(item => item.addEventListener('click', toggleAccordion));
    // faq ends
        
});
