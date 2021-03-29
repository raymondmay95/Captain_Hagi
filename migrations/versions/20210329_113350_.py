"""empty message

Revision ID: 5957651796f9
Revises: 
Create Date: 2021-03-29 11:33:50.303494

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '5957651796f9'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('spots',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('long', sa.NUMERIC(precision=7, scale=4), nullable=True),
    sa.Column('lat', sa.NUMERIC(precision=7, scale=4), nullable=True),
    sa.Column('name', sa.String(length=255), nullable=False),
    sa.Column('description', sa.Text(), nullable=False),
    sa.Column('updated_at', sa.DateTime(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('display_name', sa.String(length=40), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.Column('profile_url', sa.String(length=255), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('display_name'),
    sa.UniqueConstraint('email')
    )
    op.create_table('spot_join_user',
    sa.Column('user_id', sa.INTEGER(), nullable=False),
    sa.Column('spot_id', sa.INTEGER(), nullable=False),
    sa.ForeignKeyConstraint(['spot_id'], ['spots.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('user_id', 'spot_id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('spot_join_user')
    op.drop_table('users')
    op.drop_table('spots')
    # ### end Alembic commands ###
