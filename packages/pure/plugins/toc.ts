import type { MarkdownHeading } from 'astro'

export interface TocItem extends MarkdownHeading {
  subheadings: TocItem[]
}

function diveChildren(item: TocItem, depth: number): TocItem[] {
  if (depth === 1 || !item.subheadings.length) {
    return item.subheadings
  } else {
    // e.g., 2
    return diveChildren(item.subheadings[item.subheadings.length - 1] as TocItem, depth - 1)
  }
}

export function generateToc(headings: readonly MarkdownHeading[]) {
  const bodyHeadings = [...headings.filter(({ depth }) => depth > 1)]
  const toc: TocItem[] = []

  bodyHeadings.forEach((h) => {
    if (!h || typeof h.depth !== 'number') {
      console.warn(`[generateToc] Invalid heading skipped:`, h)
      return
    }

    const heading: TocItem = { ...h, subheadings: [] }

    if (heading.depth === 2) {
      toc.push(heading)
    } else {
      const lastItemInToc = toc[toc.length - 1]
      if (!lastItemInToc) {
        console.warn(`[generateToc] Heading '${heading.text}' of depth ${heading.depth} has no parent h2, skipping.`)
        return
      }

      if (heading.depth < lastItemInToc.depth) {
        throw new Error(`Orphan heading found: ${heading.text}.`)
      }

      const gap = heading.depth - lastItemInToc.depth
      const target = diveChildren(lastItemInToc, gap)
      target.push(heading)
    }
  })

  return toc
}

