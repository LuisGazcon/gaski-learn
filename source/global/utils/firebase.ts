import type { DocumentSnapshot, DocumentData, QuerySnapshot } from '@firebase/firestore';

export function getDocDataFromResult(result: DocumentSnapshot<DocumentData>): any {
	const documentData = result.data();
	const id = result.id;
	return { id, ...documentData };
}

export function getDocsDataFromResult(result: QuerySnapshot<DocumentData>): any {
	return result.docs.map((doc) => getDocDataFromResult(doc));
}
