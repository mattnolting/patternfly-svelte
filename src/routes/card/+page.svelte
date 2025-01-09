<script lang='ts'>
  import Card from '$components/Card/Card.svelte';
  import CardTitle from '$components/Card/CardTitle.svelte';
  import CardBody from '$components/Card/CardBody.svelte';

  import { defaultStates } from '$props/defaultStates.svelte.ts';
  import { setContext } from 'svelte';
  export const cardState = $state({
    ...defaultStates
  });

  setContext('card', cardState);

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
    card: {
      text: 'Here\'s a thing'
    },
    cardTitle: {
      text: 'Here\'s a new ca asdfrd, it does a thing FOO'
    },
    cardBody: {
      text: 'card body new new new content BAR'
    },
    cardHeader: {
      text: 'Card header header header BAZ'
    }
  });
  let visibleCards = $derived(cards.filter(card => card.isVisible));

  let {
    children,
    ...props
  } = $props();

	// import type { PageData } from './$types';

	// let { data }: { data: PageData } = $props();

  // import path from 'path';
  // import glob from 'glob';
  // import fs from 'fs-extra';
  // console.log('Path::', fs);
</script>

<div class="grid">
  <Card cardTitle = {{ text: 'yo yo yo ' }} />
  <Card {...card2} />
  <Card cardHeader={{ text: 'heyo Card HEADER'}} cardBody={{ text: 'heyo Card HEADER'}} cardTitle={{ text: 'heyo Card TITLE', id: 'next thing'}} />

  {#each visibleCards as card (card.id)}
    <Card {...card1 } />
  {/each}

  <Card text = 'heesssee'>
    <CardTitle text='card title thing' />
    <CardBody text="card body" />
  </Card>
</div>