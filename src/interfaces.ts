export interface ICharacter {
	id: string;
	image: string;
	name: string;
}

// export interface IImageBlock {
// 	data: ICharacter;
// 	partyCharacters: ICharacter;
// 	setPartyCharacters: () => void;
// }

export interface IInitialParty {
	rick: string | undefined;
	morty: string | undefined;
}

// export interface IApolloHook {
// 	charactersList: ICharacter;
// 	throttledGetData: () => void;
// }
