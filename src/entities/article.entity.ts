import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'article' })
export class ArticleEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  title?: string;

  @Column({ nullable: true })
  description: string;

  @Column({ type: 'text' })
  body: string;
}
