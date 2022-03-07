import Typograf from "typograf"
import format from "date-fns/format"
import add from "date-fns/add"

const typograf = new Typograf({ locale: ["en-US"] })

export function formatText(text) {
  return typograf.execute(text)
}

export function formatDateMonth(dateStr) {
  const date = add(new Date(dateStr), { days: 1 }) // Adding 1 day to fix switching a date in different timezones
  return format(date, "MMMM yyyy")
}
