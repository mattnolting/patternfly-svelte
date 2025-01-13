<script lang='ts'>
  import Card from '$components/Card/Card.svelte';
  import CardHeader from '$components/Card/CardHeader.svelte';
  import CardTitle from '$components/Card/CardTitle.svelte';
  import CardBody from '$components/Card/CardBody.svelte';

  const card1 = {

    cardTitle: {
      text: 'STATE:::: cardCompnent'
    },
    cardBody: {
      text: 'CARD BODY FROM PAGE: '
    },
    cardHeader: {
      text: 'CARD Header FROM PAGE: '
    },
    cardTest: {
      text: 'Updated text',
      type: 'article',
      isExpanded: true
    }
  };

  const cards = [

    {
      id: 'id1',
      text: 'text from page text 1',
      title: 'title 1',

      cardTitle: {
        text: 'cardTitle.text: stuff here',
        cardTitleId: 'titleid1'
      },
      cardBody: {
        text: 'Help me out here'
      },
      cardFooter: {
        text: 'Hey card footer'
      },
      cardHeader: {
        text: 'TESTING CARD HEADER'
      },
      cardTitleP2: 'here'
    },
    {
      id: 'id2',
      text: 'text 2',
      title: 'title 2',

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
    },
  ];

  // let visibleCards = $derived(
  //   cards.filter (
  //     cardState => cardState.isVisible
  //   )
  // );
  // console.log($inspect(visibleCards));
</script>

<div class="grid">
  <Card {...card1} >
    Hello
  </Card>
  <Card cardTitle = {{ text: 'yo yo yo ' }} cardHeader = {{ text: 'example 1 card header' }} />
  <Card cardHeader={{ text: 'heyo Card HEADER'}} cardBody={{ text: 'heyo Card Body'}} cardTitle={{ text: 'heyo Card TITLE', id: 'next thing'}} />

  <!-- {#each visibleCards as card (card.id)}
    <Card {...card } />
  {/each} -->

  <Card>
    <CardHeader text="card header" />
    <CardTitle text="card title thing" />
    <CardBody text="let's define card body" />
  </Card>

  <Card card.text='heesssee' />

  <Card>
    Here's content
  </Card>

</div>