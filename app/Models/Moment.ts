import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Comment from './Comment'
import Like from './Like'

export default class Moment extends BaseModel {
  @hasMany(() => Comment)
  public comments: HasMany<typeof Comment>

  @column({ isPrimary: true })
  public id: number

  @column()
  public user_Id: number

  @column()
  public title: string

  @column()
  public description: string

  @column()
  public image: string

  @column()
  public likesCount: HasMany<typeof Like>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
