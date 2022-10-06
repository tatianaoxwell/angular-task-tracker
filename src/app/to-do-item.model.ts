export interface IToDoItem {
	id?: number;
	userId: number;
	name: string;
	isComplete: boolean;
	createdAt?: Date;
}