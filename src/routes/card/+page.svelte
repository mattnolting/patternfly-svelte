<script lang='ts'>
  import Grid from '$layouts/Grid/Grid.svelte';
  import Card from '$components/Card/Card.svelte';
  import CardHeader from '$components/Card/CardHeader.svelte';
  import CardTitle from '$components/Card/CardTitle.svelte';
  import CardBody from '$components/Card/CardBody.svelte';

  const card1 = {
    cardTitle: {
      text: "STATE:::: cardCompnent"
    },
    cardBody: {
      text: "CARD BODY FROM PAGE: "
    },
    cardHeader: {
      text: "CARD Header FROM PAGE: "
    }
  };

  // Stateful object
  // Use when values are dynamic
  let cards = $state([
    {
      card: {
        id: 'id1',
        text: 'text from page text 1',
        title: 'title 1',
        isVisible: true,
      },
      cardTitle: {
        isVisible: true,
        text: 'cardTitle.text: stuff here',
        cardTitleId: 'titleid1',
      },
      cardBody: {
        text: 'Help me out here'
      },
      cardFooter: {
        text: 'Hey card footer'
      },
      cardTitleP2: 'here'
    },
    {
      card: {
        id: 'id2',
        text: 'text 2',
        title: 'title 2',
        isVisible: true
      },
      cardTitle: {
        id: 'titleid2',
        text: 'title text two',
      },
      cardBody: {
        text: 'card body testing testing testing',
      },
      cardHeader: {
        text: 'TESTING CARD HEADER'
      }
    }
  ]);

  let visibleCards = $derived(cards.filter(card => card.card.isVisible));
  // import { page } from '$app/state';
	// import type { PageData } from './$types';

	// let { data }: { data: PageData } = $props();

  // console.log($inspect(props))

</script>

<Grid>
  <!-- Composable: Static values -->
  <Card text='CARD 1' isPrimary = true
    cardTitle = {{ text: "check me outsssss", isExpanded: true }}
    cardHeader = {{ text: "This is card header", isExpanded: true }}
  />

  <Card card = {{ text: 'CARD 2' }} >
    Card accepts strings and html
  </Card>

  <!-- Composable: Static values -->
  <Card>
    <CardTitle>Card and all of its children - title</CardTitle>
    <CardHeader>Accept strings and html</CardHeader>
    <CardBody>Card body</CardBody>
  </Card>

  <!-- Composable: Using props -->
  <Card>
    <CardTitle text = 'composable example' />
    <CardHeader text = 'example 1 card header' />
    <CardHeader text = 'example 1 card header' />
  </Card>

  <Card {...card1} />
  <Card cardHeader = {{ text: 'example 1 card header' }} />
  <Card {...card1} cardHeader={{ text: 'heyo Card HEADER'}} cardBody={{ text: 'heyo Card Body'}} cardTitle={{ text: 'heyo Card TITLE', id: 'next thing'}} />

  {#each visibleCards as card (card.card.id)}
    <Card {...card } />
  {/each}
</Grid>