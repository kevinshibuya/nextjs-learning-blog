import { parseISO } from "date-fns";
import moment from "moment";
import humanizeDuration from "humanize-duration";

export default function Date({ dateString }: { dateString: string }) {
  function formatRelativeDate(date: Date) {
    const now = moment();
    const postDate = moment(date);
    const diffInSeconds = now.diff(postDate, "seconds");

    if (diffInSeconds < 60) {
      return `${diffInSeconds} sec. ago`;
    } else {
      const humanized = humanizeDuration(diffInSeconds * 1000, {
        largest: 1,
        round: true,
      });

      return `${humanized} ago`;
    }
  }

  const date = parseISO(dateString);
  const relativeDate = formatRelativeDate(date);

  return <time dateTime={dateString}>{relativeDate}</time>;
}
