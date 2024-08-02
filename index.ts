import { Stream, Writer } from "@rdfc/js-runner";
import { rdfParser } from "rdf-parse";
/**
 * rdf-connect processor to map entities with blank node identifiers to equivalents with named node identifiers.
 *
 * @param incoming The data stream which must be transformed.
 * @param outgoing The data stream into which the resulting stream is written.
 * @param mime The MIME type of the data stream.
 */
export function processor(
    incoming: Stream<string>,
    outgoing: Writer<string>,
    mime = "text/turtle",
): void {

    incoming.on("data", async (data) => {
        console.log(data);
        // Serialize the quads with named node identifiers.
        await outgoing.push("member found \n");
    });

    // If a processor upstream terminates the channel, we propagate this change
    // onto the processors downstream.
    incoming.on("end", () => {
        outgoing.end();
    });
}
