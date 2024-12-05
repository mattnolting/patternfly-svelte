<script lang='ts'>
  import Card from '$components/Card/Card.svelte';

  let cards = $state([
    {
      id: 'id1',
      text: 'text from page text 1',
      title: 'title 1',
      isVisible: true,
      cardTitle: {
        isVisible: true,
        text: 'cardTitle.text: stuff here',
        cardTitleId: 'titleid1',
      },
      cardBody: {
        isVisible: true,
      },
      cardHeader: {
        text: 'cardTitle.text: stuff here',
      },
      cardTitleP2: 'here'
    },
    {
      id: 'id2',
      text: 'text 2',
      title: 'title 2',
      isVisible: true,
      cardTitle: {
        id: 'titleid2',
        text: 'title text two',
      },
      cardBody: {
        text: 'card body testing testing testing',
        isVisible: false
      },
      cardHeader: {
        text: 'TESTING CARD HEADER'
      }
    }
  ]);

  const card1 = $state({
    cardTitle: {
      text: 'STATE:::: cardCompnent'
    },
    cardBody: {
      text: 'CARD BODY FROM PAGE: '
    },
    cardHeader: {
      text: 'CARD Header FROM PAGE: '
    }
  });

  const card2 = $state({
    cardTitle: {
      text: 'Here\'s a new card, it does a thing FOO'
    },
    cardBody: {
      text: 'card body new new new content BAR'
    },
    cardHeader: {
      text: 'Card header header header BAZ'
    }
  });

  // Optional: derived state example
  let visibleCards = $derived(cards.filter(card => card.isVisible));

</script>
<div class="grid">
  <!-- Here's the id: {$page.route.id} -->

  <Card
    cardTitle = {{ text: 'yo yo yo ' }}
    cardHeader
    cardBody
  />
  <Card {...card2} />
  <Card cardTitle={{ text: 'heyo Card TITLE'}} cardHeader={{ text: 'heyo Card HEADER'}} cardBody={{ text: 'heyo Card HEADER'}} />
  {#each visibleCards as card (card.id)}
    <Card {...card } />
  {/each}
</div>