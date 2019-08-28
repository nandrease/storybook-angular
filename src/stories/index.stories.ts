import { storiesOf, moduleMetadata } from '@storybook/angular';

import { Welcome } from '@storybook/angular/demo';
import { TabsComponent } from '../app/tabs/tabs.component';
import { AccordionComponent } from '../app/accordion/accordion.component';
import accordionMarkdown from '../app/accordion/accordionreadme.md';
import tabsMarkdown from '../app/tabs/tabsreadme.md';
import tabsaccordionMarkdown from '../app/tabs/tabsaccordionreadme.md';

const tabs: any[] = [
  { name: 'tab', active: true },
  { name: 'tab', active: false },
  { name: 'tab', active: false },
]

const accordions: any[] = [[
  { header: 'Accordion header', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porta imperdiet sem, eget eleifend libero convallis quis. Proin ornare odio at erat tristique, id porttitor tortor semper. Nulla posuere aliquam aliquam. Curabitur maximus sem nec hendrerit sollicitudin.', active: false },
  { header: 'Accordion header', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porta imperdiet sem, eget eleifend libero convallis quis. Proin ornare odio at erat tristique, id porttitor tortor semper. Nulla posuere aliquam aliquam. Curabitur maximus sem nec hendrerit sollicitudin.', active: true },
  { header: 'Accordion header', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porta imperdiet sem, eget eleifend libero convallis quis. Proin ornare odio at erat tristique, id porttitor tortor semper. Nulla posuere aliquam aliquam. Curabitur maximus sem nec hendrerit sollicitudin.', active: false },
  { header: 'Accordion header', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porta imperdiet sem, eget eleifend libero convallis quis. Proin ornare odio at erat tristique, id porttitor tortor semper. Nulla posuere aliquam aliquam. Curabitur maximus sem nec hendrerit sollicitudin.', active: false },
  { header: 'Accordion header', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porta imperdiet sem, eget eleifend libero convallis quis. Proin ornare odio at erat tristique, id porttitor tortor semper. Nulla posuere aliquam aliquam. Curabitur maximus sem nec hendrerit sollicitudin.', active: true },
  { header: 'Accordion header', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porta imperdiet sem, eget eleifend libero convallis quis. Proin ornare odio at erat tristique, id porttitor tortor semper. Nulla posuere aliquam aliquam. Curabitur maximus sem nec hendrerit sollicitudin.', active: true },
  { header: 'Accordion header', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porta imperdiet sem, eget eleifend libero convallis quis. Proin ornare odio at erat tristique, id porttitor tortor semper. Nulla posuere aliquam aliquam. Curabitur maximus sem nec hendrerit sollicitudin.', active: false }
],
[
  { header: 'Accordion header', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porta imperdiet sem, eget eleifend libero convallis quis. Proin ornare odio at erat tristique, id porttitor tortor semper. Nulla posuere aliquam aliquam. Curabitur maximus sem nec hendrerit sollicitudin.', active: false },
],
[
  { header: 'Accordion header', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porta imperdiet sem, eget eleifend libero convallis quis. Proin ornare odio at erat tristique, id porttitor tortor semper. Nulla posuere aliquam aliquam. Curabitur maximus sem nec hendrerit sollicitudin.', active: true },
  { header: 'Accordion header', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porta imperdiet sem, eget eleifend libero convallis quis. Proin ornare odio at erat tristique, id porttitor tortor semper. Nulla posuere aliquam aliquam. Curabitur maximus sem nec hendrerit sollicitudin.', active: true },
],
]

storiesOf('Welcome', module).add('to Storybook', () => ({
  component: Welcome,
  props: {},
}));

storiesOf('Tabs', module)
  .addDecorator(
    moduleMetadata({
      declarations: [TabsComponent, AccordionComponent]
    }),
  )
  .add('Simple tabs', () => ({
    component: TabsComponent,
    props: {
      activeIndex: 0,
      tabs: tabs,
      accordions: []
    },
  }),
  {notes: { markdown: tabsMarkdown }})
  .add('Tabs with Accordion', () => ({
    component: TabsComponent,
    props: {
      activeIndex: 0,
      tabs: tabs,
      accordions: accordions
    },
  }),
  {notes: { markdown: tabsaccordionMarkdown }});

storiesOf('Accordion', module)
  .add('Simple accordion component', () => ({
    component: AccordionComponent,
    props: {
      activeIndex: 0,
      accordions: accordions
    },
  }),
    {notes: { markdown: accordionMarkdown }});
